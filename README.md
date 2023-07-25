###### **Capstone Project** - Institute of Data Software Engineering Bootcamp


# **Guiding Light**
### Aotearoa Night Sky Discovery App

##### This project aims to create an educational, interactive resource for NZ naked eye stars with a focus on Māori astronomy and mythology.

###### [1. Background](#background)
###### [2. Objectives](#objectives)
###### [3. Technology](#technology)
###### [4. Timeframe](#timeframe)
###### [5. User flow](#user-flow)
###### [6. Data structure](#data-structure)
###### [7. Usage](#usage)
###### [7. Version Control](#version-control)
###### [8. Acknowledgements](#acknowledgements)

#### [Background]:

The night sky has been a source of fascination and wonder for humanity since time immemorial. Various cultures around the world have developed rich astronomical knowledge and mythologies to explain the celestial phenomena they observed. In the case of Aotearoa (New Zealand), Māori astronomy is closely tied to changing seasons, daily life and an ongoing connection with higher spiritual meaning.

In the modern era, there are numerous excellent night sky apps available, providing users with a wealth of information about celestial events and objects. However, a noticeable gap exists in the representation of Māori astronomy within these applications. Many existing apps focus on Western constellations and names, overlooking the unique perspective and connection that Māori culture offers.

Several hundred Māori star names survive from the time before Europeans arrived in New Zealand. Unfortunately, apart from the more prominent stars – Takurua (Sirius), Tautoru (Orion’s Belt), Ruawāhia (Arcturus), Matariki (the Pleiades), Whānui (Vega), Puanga (Rigel), Rehua (Antares), Atuatahi, Atutahi, Autahi (Canopus ) – we no longer know with any certainty which stars many of the names refer to.

The "Guiding Light" project aims to create an educational and interactive resource bringing together Western astronomy with what is known about Māori astronomy and mythology. While the development of a comprehensive night sky app similar to Stellarium is beyond the scope of the given timeframe, the project will concentrate on celestial bodies visible to the naked eye.

By narrowing the scope to naked-eye celestial objects visible in the southern skies, "Guiding Light" will provide an accessible and engaging platform for users to explore and learn about the stars and planets that have guided navigators, storytellers, and dreamers throughout the ages. The app's interactive features, including zooming, panning, search, and filter options, will enable users to navigate the night sky with ease, fostering a deeper connection to the cosmos and the cultural significance attached to these celestial wonders.

Moreover, the incorporation of Māori names, myths, and storytelling will not only enrich the app's content but also promote awareness and understanding of Māori astronomy, fostering a sense of cultural appreciation and inspiring curiosity about the broader world of astronomy among users from all walks of life.

Through this project, we hope to bridge the gap between ancient wisdom and modern technology, providing an inclusive and informative experience that celebrates the diversity of human knowledge and the universal wonder of stargazing.

#### [Objectives]:

1. - [x] Maramataka moon months and timekeeping
2. - [x] Star and planet catalogue with Māori names and myths
3. - [ ] Interactivity for users - zooming, panning, search, filter, favourites
4. - [ ] Simulate the night sky based on the user's location and time
5. - [ ] 3D rendered accurate star map of naked eye objects
6. - [ ] Mythology - incorporate AI to provide worldwide mythology about stars and planets, perhaps generate an image too
7. - [ ] AR mode with star position in real-time/ match phone position
8. - [ ] Night mode

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
    id7[Data Fetching]-->Axios/SWR
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
    I --> J(Dashboard)-->N(Logout) -->O[End]
    I --> K(Explorer)
    I --> L(Discoveries)
    I --> M(Maramataka) 
```
#### [Data Structure]:

#### ER diagram
The user needs to be able to make discoveries and mark favourites.

``` mermaid
erDiagram
    USER ||--o{ DISCOVERIES : discovers
    USER ||--o{ FAVOURITES : marks
    USER {
        string id
        string name
        string email
        string password
        dateTime createdAt
        dateTime updatedAt
        array favourites
        array discoveries
    }
    DISCOVERIES ||--o{ STAR : has
    DISCOVERIES ||--o{ CONSTELLATION : has
    DISCOVERIES ||--o{ ASTERISM : has
    DISCOVERIES ||--o{ PLANET : has
    DISCOVERIES {
        string id
        string userId
        array STAR[]
        array CONSTELLATION[]
        array ASTERISM[]
        array PLANET[]
    }
    FAVOURITES ||--o{ STAR : has
    FAVOURITES ||--o{ CONSTELLATION : has
    FAVOURITES ||--o{ ASTERISM : has
    FAVOURITES ||--o{ PLANET : has
    FAVOURITES {
        string id
        string userId
        array STAR[]
        array CONSTELLATION[]
        array ASTERISM[]
        array PLANET[]
    }
    STAR {
        string id
        string name
        string maori_name
        string designation
        string constellation
        string maori_constellation
        string description
        boolean isNamed
        float magnitude
        float bv_index
        json geometry
        string category
    }
    CONSTELLATION {
        string id
        string name
        string maori_name
        string designation
        string rank
        string description
        float display
        json geometry
        string category
    }
    ASTERISM {
        string id
        string name
        string maori_name
        string description
        float location
        json geometry
        string category
    }
    PLANET {
        string id
        string name
        string maori_name
        string image
        string symbol
        string description
        string category
    }
```
#### [Usage]:

1. Clone this repo
2. Install dependencies 

```
npm install
```

3. Set up MongoDB replica set for use with Prisma ORM: https://github.com/prisma/prisma-examples/blob/latest/databases/mongodb/README.md
4. Create a .env file with:
    - MongoDB replica set 
        - DATABASE_URL="mongodb://root:prisma@localhost:27017/prisma-mongo?authSource=admin&retryWrites=true&w=majority"

    - NextAuth
        - NEXTAUTH_URL=http://localhost:3000
        - Generate your own keys for:
            - NEXTAUTH_SECRET 
            - GOOGLE_CLIENT_ID
            - GOOGLE_CLIENT_SECRET
            - GITHUB_CLIENT_ID
            - GITHUB_CLIENT_SECRET

5. Start the db instance with Docker desktop
6. npm run dev
7. Write astronomical data using postman to make a GET request to http://localhost:3000/api/data/save-to-db
    - (Note that the maori astronomical data is not present in the json files)

#### [Version Control]:

Git branches for version control:
    - main: stable version
    - release: version ready for testing
    - feature: additional feature being developed

Semantic versioning ie vX.Y.Z

#### [Acknowledgements]:
    - The data comes from astronomical json files found at d3-celestial https://github.com/ofrohn/d3-celestial
    - Maramataka descriptions from https://github.com/JackTabronEXE/maramataka-app
    - BV-index star colour conversion calculations adapted from https://codepen.io/blaketarter/pen/EjxRMX
    - twinkling star animation adapted from https://codepen.io/SushantPradhan/pen/KzWjdz


