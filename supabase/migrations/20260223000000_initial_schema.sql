-- ========================================
-- Carpentry Dashboard — Database Schema
-- ========================================

-- ========================================
-- Practice Logs
-- ========================================
create table if not exists practice_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  joint_type text not null,
  wood_species text,
  gap_mm numeric(5,2),
  fit_rating smallint check (fit_rating between 1 and 5),
  notes text,
  session_date date not null default current_date,
  duration_minutes integer,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create index idx_practice_logs_user on practice_logs(user_id);
create index idx_practice_logs_date on practice_logs(session_date);
create index idx_practice_logs_joint on practice_logs(joint_type);

-- ========================================
-- Portfolio Items (before craft_photos — FK dependency)
-- ========================================
create table if not exists portfolio_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  description text,
  materials text[] default '{}',
  joint_types text[] default '{}',
  completed_date date,
  skill_rating smallint check (skill_rating between 1 and 10),
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create index idx_portfolio_items_user on portfolio_items(user_id);

-- ========================================
-- Craft Photos
-- ========================================
create table if not exists craft_photos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  storage_path text not null,
  public_url text not null,
  photo_type text check (photo_type in ('before', 'after', 'detail', 'progress')) default 'detail',
  practice_log_id uuid references practice_logs(id) on delete cascade,
  portfolio_item_id uuid references portfolio_items(id) on delete cascade,
  caption text,
  created_at timestamptz default now() not null
);

create index idx_craft_photos_user on craft_photos(user_id);
create index idx_craft_photos_log on craft_photos(practice_log_id);
create index idx_craft_photos_portfolio on craft_photos(portfolio_item_id);

-- ========================================
-- Projects
-- ========================================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  description text,
  status text check (status in ('active', 'paused', 'completed')) default 'active',
  target_date date,
  portfolio_item_id uuid references portfolio_items(id) on delete set null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create index idx_projects_user on projects(user_id);
create index idx_projects_status on projects(status);

-- ========================================
-- Project Milestones
-- ========================================
create table if not exists project_milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  is_done boolean default false,
  sort_order integer default 0,
  created_at timestamptz default now() not null
);

create index idx_milestones_project on project_milestones(project_id);

-- ========================================
-- Checklist Items
-- ========================================
create table if not exists checklist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  is_recurring boolean default true,
  category text default 'general',
  sort_order integer default 0,
  created_at timestamptz default now() not null
);

create index idx_checklist_items_user on checklist_items(user_id);

-- ========================================
-- Checklist Completions
-- ========================================
create table if not exists checklist_completions (
  id uuid primary key default gen_random_uuid(),
  checklist_item_id uuid references checklist_items(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  week_of date not null,
  completed_at timestamptz default now() not null,
  unique(checklist_item_id, week_of)
);

create index idx_completions_week on checklist_completions(week_of);
create index idx_completions_item on checklist_completions(checklist_item_id);

-- ========================================
-- Row Level Security
-- ========================================

alter table practice_logs enable row level security;
alter table craft_photos enable row level security;
alter table portfolio_items enable row level security;
alter table projects enable row level security;
alter table project_milestones enable row level security;
alter table checklist_items enable row level security;
alter table checklist_completions enable row level security;

create policy "Users manage own practice logs" on practice_logs
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own photos" on craft_photos
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own portfolio" on portfolio_items
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own projects" on projects
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own milestones" on project_milestones
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own checklist items" on checklist_items
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage own completions" on checklist_completions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ========================================
-- Updated_at trigger
-- ========================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger practice_logs_updated_at before update on practice_logs
  for each row execute function update_updated_at();

create trigger portfolio_items_updated_at before update on portfolio_items
  for each row execute function update_updated_at();

create trigger projects_updated_at before update on projects
  for each row execute function update_updated_at();
