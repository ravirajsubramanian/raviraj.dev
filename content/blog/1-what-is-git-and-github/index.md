---
title: What is Git and GitHub? And how to use GitHub?
date: '2019-01-01T22:59:59.000Z'
---

Have you ever wondered how big projects are done by huge people working on it and how people manage to deliver it quickly? Answer for this has been described in this post. For instance, they use “Git” or something similar as a version control system to manage the development and project release. Here we are going to see why and how it is used.

##Catalog:##

* Git
* GitHub
* Installation of Git
* Set-up GitHub
* Project setup
* Branching
* Git Commands

To whom this post will be useful?

* Any kind of Software Programmer
* Newbie for Git and GitHub
* Computer Science or similar degree student

##Git:##

Git is basically a version control system (aka VCS). There are a bunch of version control system tools are available. We are going to pick GitHub, which is a familiar cloud service provider for all your VCS needs.

##About GitHub:##

It is great git tool with nice UI and it’s pretty easy to use. Though, it is giving their services to open-source/public projects for free, it has some pricing for private projects.

Didn’t you read the latest news about Microsoft’s acquisition of GitHub. Yes, GitHub is now a product of one of the big players. [Read more about it](https://blogs.microsoft.com/blog/2018/06/04/microsoft-github-empowering-developers/).


![Microsoft acquired GitHub](https://thepracticaldev.s3.amazonaws.com/i/o899hg66zx6yhrpz0nfm.jpg)

Why you should use a version control system?

Because no one should go through the struggle of naming their project folder like,

project (1), project-copy, project-new, project-final, project-final (1), project-final-final, etc.,

If you still like that way. This post might disappoint you. 😐

How will Git be useful for you and/or your organization?

You can keep your project files in organized way that you haven’t imagined before and you can also work in a project with multiple people working on the same at a time.

#Don’t believe me?#

[Linux project](https://www.linuxfoundation.org/projects/linux/) uses git with hundreds of thousands of people working on it at a time and they release a build twice a month.

Okay now. *Where do I start?*

> You don’t learn to walk by following rules. You learn by doing, and by falling over.
> \- Richard Branson

Let’s learn by doing.

##Installation of Git:##

If you have already installed Git on your computer. Well and good, you can proceed to the next section.

If not, You can download it from [here](https://git-scm.com/downloads)

If you want some help on installation, find it [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

##Set-up GitHub:##

[Click here](https://github.com/) to sign up on GitHub with your Email If you have one already, you can use it. Log in to your account.

No matter if you have a project already on your local machine/computer, you have to create a new repository in GitHub. Repository mean nothing but a project. Give it a nice name. Remember, it’s your first project! Name it the way you like. 😉

Now time to use the tool of hackers, *The Terminal* or *The Command Prompt*.

![Picture of Computer hacking](https://media1.tenor.com/images/093b967de4114d379d5860ff0c335c2a/tenor.gif?itemid=7506285)

##Project setup:##

Open the terminal.

If you already have a project, change the directory to your project’s directory or create a new project and move into the new project directory.

If you’re new to terminal, Please use the following links.

Click [here](https://en.wikipedia.org/wiki/List_of_DOS_commands) and [here](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) for Windows

[Click here](https://en.wikipedia.org/wiki/List_of_Unix_commands) for MacOS or Linux

Once you have created a repository in GitHub, the homepage of it will look something like this,

![Linux repository in GitHub](https://thepracticaldev.s3.amazonaws.com/i/f4n02rv0ozkgm3igmbs0.png)

Click on **Clone or download** button, You can see a link. This is the Git URL. Copy it. You’re going to use it in a bit.

If you still struck setting up a repository. [See here](https://help.github.com/articles/set-up-git/) for more instructions.

Go back to your Terminal, make sure you’re in your project directory.

Type “`git init`” and then Enter, It will add some files to save some metadata for tracking of your file changes and some other necessary stuffs

When I put something inside two brackets like this `< >`, You need to fill in your input inside it.

Now type “`git remote add origin <LINK_OF_GitHub_REPOSITORY_THAT_YOU_JUST_COPIED>`”, Click Enter, It has saved the link for your repository in the name of “origin”

If it prompts for username and/or password, enter your GitHub credentials that you used to create the account.

If you don’t have any files already in your project, you can add some files and make relevant changes to your project.

> Note: Your project files will be pushed to GitHub publicly, so make sure you’re not typing any secret information anywhere in your project like passwords, API token, phone numbers, credit card details, etc.,

In Git world, a repository resembles the structure of a tree. If you are making any change to it, you do it on one of it’s branch. Since you’re pushing for the first time you can push to it’s main branch which is widely called as “master”. And others will make their changes in different branch and need to do some formalities to merge it with the main branch. We will see that in a bit.

Let’s create a branch,

Type “`git checkout -b master`”, it will create a branch in the name of “master”

Later you will create branch in different name since it should be unique in your project.

You just created a branch but your files are not added to it or saved in those “git metadata folder” for tracking of your progress.

Let’s add your files and say git that you want these files to be tracked.

Type “`git add .`” (Don’t miss the dot at the end), it will add all the files to tracking list.

And now you need to save all your changes to git, so it will put it in it’s local bank with a unique hash assigned to it. It’s called a **commit**.

Type “`git commit -m “initial commit”`”, it will save your changes or commit to it’s metadata folder with a unique hash.

So far, the changes were saved only on your local machine. We need to push this to cloud, so you can download from any machine or your own machine even if you lose it.

Type “`git push origin master`”, it will push your commit (your saved changes/files) to your repository in cloud.

That’s it, Your code is in cloud now.

![Picture of cloud](https://media.giphy.com/media/HgycnYQCMeJXO/giphy.gif)

Go to your repository page in GitHub, You can see all your file changes you made available there.

So how will you proceed your work further.

You can make any changes in your favorite text editor anytime and push code to the same master branch, so your code will go to your repository in cloud. But, that’s not what clever people do.

Overwhelmed by too much stuff to learn? Don’t worry, you will get used to it.

> Today is cruel.
> Tomorrow is crueler.
> And the day after tomorrow is beautiful.
> \- Jack Ma

Let’s take another step,

Now assume you are having a small issue in your project and you are going to push a small change or patch. It could possible fix the issue. What you do usually is just make the necessary changes and save it in a new folder with the fix name. We are going to do the same concept with the use of branching.

##Branching:##

Branching is nothing but saving copies with changes in multiple files. It might sound just like ancient method of having different folders for different versions. But, it comes with a lot of advantages.

Let’s do a sample to know about it.

Stick to your assumption of having a small fix or patch and you need to push it to cloud so that your team members can get the working copy of yours.

Go back to your terminal and make sure you’re in your project directory. Type, “`git status`”, It will show you some information about which branch you’re in or which commit you made last and all the files you have changed after it has been updated in the cloud.

It will say something like,

    “On branch master
    
    Your branch is up to date with ‘origin/master’.
    
    nothing to commit, working tree clean”

It means that you have never made any change after it has been updated to cloud repository.

It’s time to create a branch, *finally*.

Type “`git checkout -b new-branch`”, It will create a branch with the name "new-branch" and checkout the same.

What is checkout? Don’t worry, the git can only concentrate on one branch at a time in a terminal windows. So you need to tell which branch to concentrate. That’s it.

> Note: Missing the “-b” in the above command will throw an error like,

    pathspec ‘new-branch’ did not match any file(s) known to git.

The above error indicates that it couldn’t find any branch called “new-branch”. Because it will search for any existing branch and checkout if exists and throws error if not.

I hope, You typed the previous command right.

Now make your changes in the files in your project.

Even if you don’t really know what to change and just learning the process. Just change any file by adding some empty lines and move further.

Now hit, “`git status`”

You can see something like the following and some changed files names in red as,

   ON branch new-branch
   Changes not staged for commit:
   
   Modified: <PATH_TO_THE_FILE_THAT_YOU_JUST_MODIFIED>

It means, the mentioned file contents has been changed after the project has been updated with the cloud repository. You can see in the first line that you’re in the new branch that you just created.

Now we need to commit all the changes to this branch and push it to cloud.

Type, “`git commit -m “my second commit”`”, It will commit your changes to “new-branch”, the branch that you just created.

Hit “`git push origin new-branch`” which will push your new branch to your cloud repository.

In the above command, “origin” means the alias that we have assigned for your cloud repository URL. So it knows where your branch should be uploaded. “new-branch” means you’re asking git to push your locally created branch “new-branch” to push to the repository you mentioned.

Now go to the browser and see your cloud repository page, In the home page where it shows all the files, there’s will be a drop down option in the left side to choose the branch. It is similar to your terminal. The page can only show files from only one branch at a time. So you’re choosing which one to show. There you can find your newly created branch name “new-branch” shown.

Clicking it will show files from that particular branch. Go and see the file you made some changes on. This is just like a new folder in your machine.

*Voila!* You have learned one of the complicated concept, branching. You will have to follow the same steps whenever you need to make new changes and push to cloud.

> Now give the URL for your branch to your friends or teammates and say, “the code you want is here” like a boss. 👓

##Git Commands:##

You can see that we have used many git commands in the terminal. We will see them here again collectively so that you can remember.

###To setup project:###

“`git clone <CLOUD_REPOSITORY_CLONE_URL>`” — To create a project directory for the cloud repository that has been created

###For Existing project:###

“`git init`” — To create all the hidden files of git to track our file changes and more

“`git remote add origin <CLOUD_REPOSITORY_CLONE_URL>`” — To add the cloud repository Git URL to the memory of git, so that we can call it later by the name of “origin”

###Status:###

“`git status`” — To check the current branch and all the files modified

###Branch:###

“`git checkout -b <NEW_BRANCH_NAME>`” — To create a new branch with your unique name

###To switch to existing branch:###

“`git checkout <EXISTING_BRANCH_NAME>`” — To let the git concentrate on a particular branch (already existing branch)

###Pushing:###

“`git add .`” — To add all the files to git tracking list

“`git commit -m “<YOUR_COMMIT_MESSAGE>”`” — To save all the file changes to the git memory (simply called commit)

“`git push origin <YOUR_BRANCH_NAME>`” — To push all the commits in your branch to cloud repository with the same branch name

I have told you branching has a lot of advantages over ancient methods. We will see all those in the next part and much more for organizational use.

Have you learned something in this post? Or you got any doubt from the examples in this post? The comment box is all yours. 😉

*Happy Coding!* 😈

[Raviraj Subramanian](https://about.me/ravirajsubramanian)

Find me on [GitHub](https://github.com/ravirajthedeveloper) and [Twitter](https://twitter.com/thisisraviraj)
