![](imgs/PJ_flag.png)
#  PGC Election Hub

> Providing Interactive Sample Ballots
#



## Team Members & Contribution:

| Names          | Contributions|
| :---           |    :----:   |
| Ayesha Raza    | HTML, POST request, CSS, file.md, Powerpoint, Powerpoint notes|
| Josh May       |  Project Manager, JavaScript, Server Configurations, HTML, CSS,
                    Widget Installation & Development, Editing, Stack Management | 
| Lorraine Siochi|  CSS, Meeting Notes, Wireframes|
| Tony Persaud   |  HTML, POST request, CSS, README.md|
| Tamia Green    |  CSS|

#
## Link to our app
[PGC Election Hub App](http://pgcelection.herokuapp.com/)
#
## Information problem we're trying to solve:

Voting is a crucial process as voters collectively make selections intended to uphold democracy through candidates passing laws and legal measures addressing specific problems. Voters get anxious about what will they face at the polls on election day. Along with electing a president, we are voting for vice-president, Senate, House of Representatives, and many more. It is imperative to make informed decisions and know who we are voting for except the president as they all participate in making laws that ultimately affect us, citizens. A certain population of voters, the young generation and those with limited accessibility, in particular, are more likely to be undereducated, underprepared, or inexperienced with the voting process.
When we were reviewing _PGC.gov_ pages, we identified certain problems related to what was available to voters. We realized that voters don’t have enough resources related to the ballot for the upcoming election and what is expected from them for election day. However, there were sample ballots for voters from previous elections but they were only available in PDF versions. Voters can only view them but cannot experience it the way they will be experiencing on the day of the election as they are not interactive. This issue highlighted an opportunity for us to help citizens know who they are voting for and make their experience less overwhelming. We decided to enhance what is already available but transform into something that is more useful and informative for voters. Therefore, we aimed to raise awareness of the voting process in _Prince George’s County (PGC)_ by providing interactive sample ballots and connecting users with resources associated with ballot contents. Our system is aimed to present interactive sample ballots that cater to users based on details they provide regarding their voting district.  Our targeted system will resolve the information problem by providing a resource that is taking the users through the process of voting in their area while giving a glimpse of what would be seen on ballots on election day. This can help ease tensions of inexperienced voters by allowing them to rehearse ahead of voting and helping them find answers to questions that arise from practicing; these are things that there is currently no system for being used in _PGC_. In addition to informing about the voting process, we are informing them about specific less-known roles that voters would be voting for. All in all, our aim is to prepare voters with general information and digital ballots that are more informative and helpful in assisting the preparation of users with limited accessibility intending to vote.
#
## Stakeholders/target browsers:

Within the scope of our project, major stakeholders are the _Prince George’s County Voting System_ and voters within this Jurisdiction. We targeted younger and less experienced voters in particular. Since candidates themselves are also our potential stakeholders, we ensured that our content is maintained as objectively and unbiased as possible. We expect users of our website to be using browsers on either laptops or iOS/Android devices. This means that laptops, iPhones, and Android devices are the targer devices. Users who are on a laptop should use browsers such as Firefox, Google Chrome or safari. These are the best working browsers compatible with a laptop. Internet Explorer 8 and 9 are a little out of date. As for iOS/Android devices, the default browser can be used. We have styled our CSS so that the display and functionalities of our website can work for these browsers.


#
## Data we chose to work with:

Our data includes ballot measures and polling places. The site we built builds upon this data to create various links and output pertaining to the data elements. Since our problem was partially identified due to an inability to find data sources for the open-sourced information we sought, we elected to clean what was available and reformat it from PDF’s to valid JSON encoding.
#
## Chosen strategies and solutions for the problem:

One thing we aimed to do was present polling place locations in a way that was easily modified and viewed, but this became a problem due to the data set composed of 274 rows over 6 columns. Problems arose when our first table sorting method proved itself to be too slow to add any value to our deliverable. Our solution to this problem was to rearrange the data as 12 different API’s housed in our server. Each API represents the different sorting methods(ascending/descending) for the 6 different columns. This method is quite redundant and raises the risk of typos or mistakes in output, but it does allow the table entity to sort much faster than the previous method. The first sorting method averaged around 12 seconds per column sort and the strategy we implemented shortened sorting to less than 1 second regardless of the column.   

#
## Technical system decision rationale:

For our API, we have used data from 2018 sample ballots that have been converted to JSON. We utilized various API’s present within _PGC_ sites as it appeared naturally embedded within our pages and site. We featured an interactive voting terminal in our self-designed API and used additional information scraped from _PGC.gov_ sites for other contextual information. A  major portion of our project is HTML, CSS, and JavaScript oriented as they created a large portion of our front end. As far as the design of the site is concerned, we have used interactive graphics, Tableau/Gephi tools in specific along with the further implementation of API resources provided by _PGC_. Most part of our data has been gathered form _PGC_ sites before it was cleaned and formatted to our specifications and we have stored that within our file structures. Our reason for compiling everything in this manner was to keep things efficient within the system by preprocessing data so it is ready for use when needed. This way, it doesn’t expend unnecessary resources in fetching or retrieval processes from outside sources. Our targeted devices are computers, laptops, and mobile phones and we have made all possible efforts in making things more presentable to other end devices in the given time-frame. We are providing our users with interactive sample ballots that are useable for a website or an application.

#
## How our final system helps to address the problem:

Unmentioned in previous submissions and our initial presentation, is the idea that we would like to not only inform voters and help connect them with resources but also excite them. Our solution to informing voters comes with our sample ballot that outputs information along with pertinent links attached to measures and options. This would most certainly help an uninformed voter, as the process scripting these links involved attentive audits of ballots and research into them. To excite users, we included an open-source resource published by the GitHub user case. The resource allows users to visualize the election process interactively with a widget simulating an election between three opponents. To further prepare and excite voters, we crafted a practice bubble fill-in component that users can practice with if they desire. The bubble fill-in is a bit tongue-in-cheek, but it allowed us to get some great experience furthering our understanding of document object modeling and javascript. Furthermore, it cannot be discredited as useful when one looks back through American history and finds that the 2000 presidential election may have been completely different was it not for an abundance of improperly filled bubbles(also known as hanging chads).

#
## Challenges faced and impact on the final design

We faced a number of challenges that impacted our final design overall. For instance, displaying data in a tabular form was challenging and it was not displaying properly in the box. To fix this issue, we used flexbox so that the box expands the data to fill available free space or perhaps shrink to prevent overflow. We also had a similar issue where the data was not displaying properly inside the box in the mobile version. One of the reasons for that was the radio buttons inside the box where it wasn’t resizing and overlapping. We used flexbox for that as well to wrap the text onto multiple lines from top to bottom using the flex-wrap property. Initially, we also wanted to add a general search bar on top of the webpage but we didn’t want to confuse our users due to having another search bar to filter polling locations. Moving on, in our initial wireframe,  the layout of our site consisted of a navigation bar that can direct the user to about six different pages. However, due to time constraints and complexity of the problem itself, we created a navigation bar that by clicking directs the user to the specific part of the page than having separate pages. Lastly, another challenge we faced was our for-loop which was not difficult to read but also doing too many things once per item as there were loops inside for-loops. We decided to refactor the loops using functions like map, find, filter instead.
#
## Possible future work directions with this problem:
#
For future work directions related to this information problem, we will be reformatting the site to match the criteria of the pending election in _PGC_.
