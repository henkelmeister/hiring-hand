hiring-hand
===========

A job recommendation service.

Requirements
------------

* `node.js`
* `yarn`
* `postgresql`

Setup
-----

Clone the repository

```shell
git clone https://github.com/CS320F21T3/hiring-hand.git
```

Install dependencies

```shell
yarn
```

Create configuration files by copying the examples in `config/`

```shell
cp config/db.example.mjs config/db.mjs
cp config/server.example.mjs config/server.mjs
```

Open your configuration files and fill in the required fields with your database credentials, along with a secret key of
your choice

```javascript
// config/db.mjs
...
  user: '', // FILL ME IN
  password: '', // FILL ME IN
...
```

```javascript
// config/server.mjs
...
  secret: '', // FILL ME IN
...
```

Set up your development database

```shell
yarn run dev:db:create
yarn run dev:db:migrate
yarn run dev:db:seed
```

Set up your test database

```shell
yarn run dev:test:create
yarn run dev:test:migrate
```

Check your client build status

```shell
yarn run dev:build
```

Start your development server

```shell
yarn run dev
```

If all goes well, you're ready to start coding.

Development
-----------

**Any** time you open the project, sync your repository with our remote on GitHub

```shell
git checkout main
git pull
```

If the main branch has been updated, be sure to merge said changes into all your local branches

```shell
git checkout my-branch
git merge main
```

If changes to the main branch include anything related to the database (changes in `db/`), be sure to update your
database schema/data.

```shell
yarn run dev:db:migrate
yarn run dev:db:seed
yarn run test:db:migrate
```

To start coding, you first have to either create, take or be assigned an issue on GitHub. Before you start developing,
make sure to talk to the team. Be sure we are all on the same page about

- What the issue is
- Why it's an issue
- Who is/will be working on the issue
- How the issue will be closed

Once you're all on the same page, checkout the main branch, then create a new local branch and start working.

```shell
git checkout main
git checkout -b my-branch
```

Good practice is to write tests _before_ you make any changes to the application. Writing them out beforehand helps
orient you as to what expected behavior should be when you're finished.

Once you've made the changes necessary to close the issue, **always** lint your changes and run the test suite.

```shell
yarn run lint
yarn run test
```

If everything checks out, push your branch to GitHub.

```shell
git push --set-upstream origin my-branch
```

Once the references push, open up GitHub and create a pull request. You should include a description of any relevant
information that someone else wouldn't immediately understand from reading the code. This includes high-level concepts
and descriptions of the changes you're making.

You then just have to wait for others to review your code and okay it. As a member of a team, you also have a
responsibility to review PRs from other people. At this stage, it so conveniently happens that you have time to do so,
so go check out the Pull Requests tab and leave some reviews on any open PRs.

At this point you might get comments or requested changes from others. Be sure to check your PRs and respond/make
changes accordingly. If your PR eventually gets approved, you can then safely merge your change into the main branch
and start the cycle anew.
