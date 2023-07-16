###### **Capstone Project** - Institute of Data Software Engineering Bootcamp


# **Guiding Light**
### Aotearoa Night Sky Discovery App

##### This project aims to create an educational, interactive resource for NZ naked eye stars with a focus on Maori astronomy and mythology.

###### [1. Background](#background)
###### [2. Objectives](#objectives)
###### [3. Technology](#technology)
###### [4. Timeframe](#timeframe)
###### [5. User flow](#user-flow)

#### [Background]:

There are many excellent night sky apps available, but none with much information around Maori astronomy. While creating a comprehensive night sky app such as Stellarium is not realistic for the given timeframe, the scope will be narrowed by focusing only on naked eye celestial bodies visible from the southern hemisphere. 

#### [Objectives]:

1. Star and planet catalogue with Maori names and myths
2. Interactivity for users - zooming, panning, search, filter, favourites
3. Simulate the night sky based on the user's location and time
4. 3D rendered accurate star map of naked eye objects
6. Maramataka moon months and timekeeping
7. Mythology - incorporate AI to provide worldwide mythology about stars and planets, perhaps generate an image too
8. AR mode with star position in real-time/ match phone position
9. Night mode

#### [Technology]:

```mermaid
flowchart TB
    subgraph Backend
    id0[/Server\]-->NextJS
    id1[(Database)]-->MongoDB---PrismaORM
    id3[Data Handling]-->APIroutes
    id4[Auth]-->NextAuth
    end
    subgraph Frontend
    id2{{Framework}}-->NextJS
    id5{{Language}}-->TypeScript---JavaScript
    id6{{Styling}}---TailwindCSS*
    id7[Data Fetching]-->Axios
    end
```
###### *may also look into HeadlessUI or MaterialUI for styling


#### Out of scope tech / questions:
* Data: 3rd party Astronomy APIs - Bright Star Catalog for naked eye stars
* 3D graphics: ThreeJS, OpenGL, WebGL
* Visualisation: D3js (d3-celestial)
* Real-Time Data & Simulation: Celestial (JavaScript) for astronomical calculations and algorithms
* AR Frameworks: Most likely won't have the time to implement this feature


#### [Timeframe]:

```mermaid
gantt
    title Guiding Star - Capstone Project
    dateFormat YYYY-MM-DD
    section Plan
        Project setup                :active, a1, 2023-07-06, 2d
            Research                 :2023-07-06, 1d
            Timeframe                :1d
    section Design
        Structure and UI             :active, b1, after a1, 3d
            User flow diagram        :after a1, 12h
            Architecture diagram     :12h
            Logo, colours, fonts     :1d
            Mockups                  :1d            
    section Build & Test
        Backend                      :active, c1, after b1, 5d
            Server                   :after b1, 1d
            API integration          :1d
            Database                 :2d
            CRUD                     :1d
        Frontend                     :active, d1, after c1, 7d
            Core UI                  :crit, 2023-07-16, 36h
            Core programming         :crit, 60h
            Core complete            :crit, milestone, 2023-07-20, 0d
            Feature branches         :3d
    section Deploy
        Testing & deployment         :active, e1, after d1, 1d
    section Deliver
        Documentation                :active, f1, after e1, 2d
            Github                   :after e1, 1d
            Keynote                  :1d
        Presentation                 :crit, milestone, 2023-07-26, 0d
```

#### [User Flow]:

```mermaid
flowchart TB
    A[Start] -->|Splash| B(Sign in)
    B --> C{Account?}
    C -->|Yes| D[Home]
    C -->|No| E[Create Account]-->F{GPS Permission?}
    F --> |Yes| H[Onboarding]-->D
    F --> |No| G(Alert)-->B
    D --> I(Navigation)
    I --> J(Discoveries)
    I --> K(Settings)
    I --> L(Modes)
    I --> M(Account) -->N(Logout) -->O[End]

  
```

