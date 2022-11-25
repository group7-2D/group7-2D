## Learning Objectives
This website allows targeted users to understand and interact with our model, the proposed solution for food insecurity in Asia.

## Setup

### Install Git

You need to have Git to do the project. Download and install the software according to your OS:

### Downloading Repository
Clone the mini project repository from Github. On your terminal or Git Bash, type the following:

shell
cd Downloads
git clone https://github.com/group7-2D/group7-2D.github.io

### Go to group7-2D.github.io Folder

Once you have downloaded the repository, you can go to the repository and to the folder called Crops for this mini project.

Windows:
dos
cd group7-2D.github.io\Crops
dir

Unix/MacOS:
Our Vocareum was unable to upload group7-2D.github.io zipped folder, so we uploaded Crops zipped folder instead. Please change paths accordingly in Vocareum. 

shell
cd Crops
ls

The last command should output the following:

shell
__target__
app
scripts
stylesheets
application.py
Pipfile
Pipfile.lock
runflaskvoc.sh

### Create Virtual Environment

You should open Anaconda Prompt to do the following steps.

In the following steps, whenever there is a different between the OS commands, the Windows prompt will be represented by:
shell
>
while the MacOS/Linux prompt will be represented by:
shell
$

Go to the root folder Crops. 

Windows:
dos
> cd %USERPROFILE%\Downloads\group7-2D.github.io\Crops

Unix/MacOS:
shell
$ cd ~/Downloads/group7-2D.github.io/Crops

First make sure that you have installed pipenv package.

shell
pip install --user pipenv

We will call Crops folder as the root folder of our application.

From the root folder, install the packages specified in the Pipfile.

shell
pipenv install

The above steps will install Flask and Transcrypt Python libraries and some other necessary packages. 

To activate the virtualenv, run
shell
pipenv shell

Alternatively, you can choose everytime you run a command to prepend that command with the following:
shell
pipenv run

Ok, so let's enter the shell by typing:
shell
pipenv shell

You should see the word (Crops) in your prompt something like:

Windows:
dos
(Crops) folder >

Unix/MacOS:
shell
(Crops) user $

To exit the virtual environment at the end of this mini project, simply type:
exit
All the subsequent exercises assumes you are in the virtualenv shell.
Running on Vocareum
If you use Vocareum terminal to run your Flask application, you can do so by running the runflaskvoc.sh script. Before running this script, make sure the voc=True is set true in the following line inside Crops/app/__init__.py.

# set voc=False if you run on local computer
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)
Now, make sure you are inside the work folder by using the pwd command.
pwd
Use ls to ensure that you see the runflaskvoc.sh in the current folder.
ls
Make sure that the script is executable by running the following command.
chmod a+x ./runflaskvoc.sh
The above script is to change the file to be executable for all users, group and owner.
To run the script, type the following.
./runflaskvoc.sh
Once it is running, you can open another tab in your browser and type the following url: https://myserver.vocareum.com/.
To stop the web app type CTRL+C.
Local Computer
If you are using your own computer, make sure to change the flag voc=False in the following line inside Crops/app/__init__.py.
# set voc=False if you run on local computer
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=False)
Now, you can run Flask by typing:
flask run
You should see that some output will be thrown out, which one of them would be:
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit) 
