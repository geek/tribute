%title: hapines with devices
%author: Wyatt Preul

    .:/ossyyyss/                                                                                
    .+syyyyyyyyyy+ `+ss:                                                                           
    .oyyyyyyyyyyyyy+ `syy/ `.                                                                        
    /ys:.``.:syyyyyyy/. `  -sy/                                     .....`                            
    +ys` :++: `syyyyyyyy: .yyyyy/                                   .+````                             
    :yyo  +ss+  syyyyyyyy/ .yyyyyy-  `-----.   `----.   -----   -.-- .+       -:----   :.--`.----:`---:.
    syyy+. ``   oyyyyyyyy/ .yyyyyyo  .+    /` -:    /`      :-  o`   .o----  /-    .+  o-   -+   `s`   +
    yyyyyyo  o+. .+yyyyyy/ .yyyyyys  .:    :. +------. .----:-  +    .+      o      o` o    -:    o    /
    syyyyys  yyyo- .+yyyy/ .yyyyyyo  .:    :. -:       +    /-  /    .+      /-    ./  o    -:    o    /
    :yyyyys  yyyyyo- .+yy/ .yyyyyy-  `.    .`  `----.  `---...  -    `-       .:---.   :    ..    :    -
    +yyyy/  +yyyyyyo- ./- `oyyyy/                                                                      
    /y/  .. `/yyyyyy+  `.. .oy/                                                                       
    . `syys  syyyyy/ .sss/ `.                                                                        
    :++- .yyyyyyo` ://.                                                                           
      .ossyyyss+`                                                                               

-------------------------------------------------

# Setup

## Option 1

    npm install -g npm-clone &&
    npm-clone install tribute

## Option 2

    git clone git@github.com:geek/tribute.git

-------------------------------------------------

# code in workshop
* follows hapi style guide: hapijs.com/styleguide
* organized in folders by subject in tribute repo

-------------------------------------------------

# resources
* hapijs.com
* hapi university - github.com/hapijs/university
* books - hapi.js in action, getting started with hapi,
    developing a hapi edge
* `npm install makemehapi`
* mentor program - hapijs.com/help
* gitter.im/hapijs/hapi

-------------------------------------------------

# syllabus
* what we are building
* what tools we will use
* architecture
* hapi fundamentals


-------------------------------------------------

# what we are building

* dashboard to view sensor data from arduinos
* dashboard to control arduinos


-------------------------------------------------

# what tools we will use

* hapi
* nes
* MySensors
* serial port, websockets, mongo, arduinos, radios, sensors


-------------------------------------------------


# hapi

* framework for building web apps/services
* solves boring stuff: caching, auth, validation, routing, CORS,
    load limiting, content-type processing… and more


-------------------------------------------------


# nes

* hapi plugin for using websockets
* client can be browser or server


-------------------------------------------------


# MySensors

* http://www.mysensors.org
* arduino sketches and instructions


-------------------------------------------------

# hardware architecture

▛▀▀▀▀▀▀▀▀▀▜               
▌ sensor  ▐                     ▛▀▀▀▀▀▀▀▀▀▜
▛▀▀▀▀▀▀▀▀▀▜     ))) radio ))    ▌ arduino ▐
▌ arduino ▐                     ▙▄▄▄▄▄▄▄▄▄▟
▙▄▄▄▄▄▄▄▄▄▟                       ▌ USB ▐      
                                  ▌     ▐
                                ▛▀▀▀▀▀▀▀▀▀▜
                                ▌ laptop  ▐
                                ▙▄▄▄▄▄▄▄▄▄▟

-------------------------------------------------

# laptop architecture

▛▀▀▀▀▀▀▀▀▀▜               
▌   nes   ▐  
▌ leblanc ▐                     ▛▀▀▀▀▀▀▀▀▀▜
▛▀▀▀▀▀▀▀▀▀▜   (( websockets ))  ▌ nes     ▐
▌ browser ▐   (( http ))        ▌ jill    ▐
▙▄▄▄▄▄▄▄▄▄▟                     ▌ hapi    ▐
                                ▌         ▐                                
▛▀▀▀▀▀▀▀▀▀▀▀▜                   ▌ mongo   ▐
▌jenny      ▐  (( websockets )) ▙▄▄▄▄▄▄▄▄▄▟
▌cowboymouth▐  (( http ))
▙▄▄▄▄▄▄▄▄▄▄▄▟
  ▌serial ▐
 ▛▀▀▀▀▀▀▀▀▀▜
 ▌MySensors▐
 ▙▄▄▄▄▄▄▄▄▄▟

-------------------------------------------------

# hapi fundamentals

* differentiators
* community
* server
* routing
* plugins


-------------------------------------------------

# differentiators

*
