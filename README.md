***Be Champions: A Search Bar plagiarized from Champion's product page***

**Current state of implementation:**
None of the functionality works.
A small visual bug on the wishlist section.

**To do**

Transform *App.js*'s inline styles into a css stylesheet.

Merge all component stylesheets to ensure that there are no conflicts between them.

**How to navigate:**

The components folder contains:
 -a styles.min.css - aka a copy of champion's full stylesheet. It is never used in the components, and is only there as a reference.
 -Logo / navigationMenu / RightSide are the three main components that populate the App. Most of the styles have been switched from inline to a css stylesheet. For reference's sake I included, in each component-folder, some html files that contain the original site's components.

**Latest Changes**

  I switched the setup over to be dependent on npm rather than on yarn. This had the advantage of making the whole project closer of the rest of the BeChampions' repos.