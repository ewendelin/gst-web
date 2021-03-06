require 'mina/git'
require 'mina/deploy'
# require 'mina/rbenv'  # for rbenv support. (https://rbenv.org)
# require 'mina/rvm'    # for rvm support. (https://rvm.io)

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)

set :user, 'deploy'          # Username in the server to SSH to.
set :forward_agent, true     # SSH forward_agent.
set :domain, 'www.gast.world'
set :repository, 'git@github.com:ewendelin/gst-web.git'

# ====== deploy to production =======
# merge your working branch to master
# git pull origin master
# git checkout production
# git merge master
# git push origin production
# mina deploy -v
set :deploy_to, '/home/deploy/production/gast-web'
set :application_name, 'gast-web'
# set :branch, ENV['BRANCH'] || `git symbolic-ref --short HEAD`.strip # current branch
set :branch, 'production' # default is master
# ====== deploy to production =======

# ====== deploy to staging for test =======
# set :application_name, 'gast-web-staging'
# set :deploy_to, '/home/staging/web'
# set :branch, 'titlelength'
# ====== deploy to staging for test =======

# ====== SCP ==========
# scp /Users/  :/etc/nginx/ssl
# =====================

# ==== wechat pay ====
# npm i -S weixin-js-sdk
#

# Optional settings:
#   set :user, 'foobar'          # Username in the server to SSH to.
#   set :port, '30000'           # SSH port number.

# Shared dirs and files will be symlinked into the app-folder by the 'deploy:link_shared_paths' step.
# Some plugins already add folders to shared_dirs like `mina/rails` add `public/assets`, `vendor/bundle` and many more
# run `mina -d` to see all folders and files already included in `shared_dirs` and `shared_files`
# set :shared_dirs, fetch(:shared_dirs, []).push('public/assets')
# set :shared_files, fetch(:shared_files, []).push('config/database.yml', 'config/secrets.yml')

# This task is the environment that is loaded for all remote run commands, such as
# `mina deploy` or `mina rake`.
task :remote_environment do
  # If you're using rbenv, use this to load the rbenv environment.
  # Be sure to commit your .ruby-version or .rbenv-version to your repository.
  # invoke :'rbenv:load'

  # For those using RVM, use this to load an RVM version@gemset.
  # invoke :'rvm:use', 'ruby-1.9.3-p125@default'
end

# Put any custom commands you need to run at setup
# All paths in `shared_dirs` and `shared_paths` will be created on their own.
task :setup do
  # command %{rbenv install 2.3.0 --skip-existing}
end

desc "Deploys the current version to the server."
task :deploy do
  # uncomment this line to make sure you pushed your local branch to the remote origin
  invoke :'git:ensure_pushed'
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'

    on :launch do
      in_path(fetch(:current_path)) do
        # command %{sudo rm -rf node_modules package-lock.json}
        command %{npm install}
        # command %{npm audit fix}
        # command %{yarn upgrade}
        command %{NODE_ENV=production npm run build}
      end
    end

    invoke :'deploy:cleanup'
  end

  # you can use `run :local` to run tasks on local machine before of after the deploy scripts
  # run(:local){ say 'done' }
end

# For help in making your deploy script, see the Mina documentation:
#
#  - https://github.com/mina-deploy/mina/tree/master/docs
