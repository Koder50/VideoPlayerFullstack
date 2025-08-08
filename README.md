# Project
It is a project of Video Player - inspired by Youtube. It enables searching for one of three videos: "surfing", "falls" or "skateboarding" and then watch it. There is also a history of last two different 
films watched (another example of database use)
## Technologies
Spring Boot, Angular, CSS, Typescript, HTML, Java 17, Spring Data JPA, Swagger UI, Spring Security, JUnit, AssertJ, NGRX, Maven
## Swagger

http://localhost:8080/swagger-ui/index.html

## How to use
I am using IntelliJ Idea:

1) Download Zip File from github(on main page of repository find green button 'Code', click it and then find and click 'Download Zip')
2) Open this project in IntelliJ Idea
3) In program click ctrl+shift+R type frontend\src\index.html and click enter(search)
4) There should be one line found - double click on it. Now you have to specify those path for the current project path of index.html(find this file, right click on it choose 'Copy Path' and choose absolute path)
5) Search for the file ../VideoPlayerFullstack\pom.xml and find the line: '<artifactId>spring-boot-starter-data-jpa</artifactId>' just below it add line: '<version>1.3.5.RELEASE</version>'
6) Right click on the project name(Top left), it should be 'VideoPlayerFullstack [videoplayers]'
7) Choose in the bottom 'Maven' -> 'Run Maven' -> 'Clean install' After about few minutes there should be one of messages: 'Build success'. 
8) In IDE search for the play on bar slightly to the left on top of program and choose the left option from play, Run/Debug Configurations and choose Edit Configurations
9) At the top left find '-' (Remove configuration) and do it with all configurations there
10) Find '+' to the left on top (Add Configuration) and click it.
11) Then choose Application
12) Then choose name 'VideoPlayer' for example
13) Then there should be Java 17 SDK of 'videoplayers' module.
14) Choose main class, there should be VideoPlayersApplication and choose it
15) Click apply and then ok. You should run it(press play in correct configuration): then go to the browser to localhost:8080 or localhost:8080/ or localhost:8080/login and there should be login page
16) For testing do the same as 10-15, but in 11. choose Junit, in 12 choose name 'VideoPlayer tests' for example, and in 14 there should be User Repository Test class to choose it, so choose it. 15 the same.
17) To start program, on the bar on top to the left from play you have the name of configuration, choose 'VideoPlayer' and click play, the program starts. Choose 'VideoPlayer tests' the tests start. Tests should all pass and be in green.
18) There is also Swagger. If the login data from CV is not working you have to in code delete 'Authorize' button, then create for example two users. If login data works you have to create three video players
    (first use post Authenticate, use login data from CV or which you created, copy the token, click button 'Authorize' and paste token there, press authorize, should be success and close). If you deleted button 'Authorize' then you can omit those activities).
19) Go the post query 'video-players' and three times do this query: in urlName first time put 'assets/surfing.mp4' and nameAbbr: 'surfing', second time put in urlName 'assets/falls2.mp4' and nameAbbr: 'falls' and
    last, third time put in urlName 'assets/skateboarding.mp4' and nameAbbr: 'skateboarding'.
20) Now you can log in. There you search for the film - there are as you see three films - surfing, skateboarding and falls. 
