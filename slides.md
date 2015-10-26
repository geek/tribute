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
* - Break -
* architecture recap
* cooking up something good (Mac Demarco style)

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
* validation

-------------------------------------------------

# differentiators

* designed for multi-team collaboration
* request lifecycle, not (blah, blah, next) =>
* community, composability, battle tested, fun…
   - this is a fun framework and community
   - fun

-------------------------------------------------

-> # community <-

-------------------------------------------------

# hapi community values

* diversity
* empathy
* benevolent dictators

-------------------------------------------------

# new contributors welcome

* always looking for new contributors
* always looking for new maintainers
* always expanding

-------------------------------------------------

# encourage

* pull request over passivity
* test everything
* forks

-------------------------------------------------

# miscellaneous

* BSD 3 clause license
* https://github.com/hapijs/discuss
* https://github.com/hapijs/contrib

-------------------------------------------------

-> # server <-

-------------------------------------------------

# server intro

* requires connection (example 1)
* debug options (example 2)
* many options: load, router, routes (example 3)

-------------------------------------------------

-> # routing <-

-------------------------------------------------

# request lifecycle

1. onRequest - always called, creates request obj
2. lookup route, parse cookies
3. onPreAuth
4. auth, parse payload, auth payload
5. onPostAuth
6. validate path, query, payload
7. onPreHandler
8. request pre’s
9. route handler executes
10. onPostHandler
11. validate response
12. onPreResponse
13. send response
14. response
15. wait for tails
16. tail

-------------------------------------------------

# routing basics

* handler (example1)
* param (example2)

-------------------------------------------------

# intermediate routing

* unlimited param (example3)
* limited param (example4)
* one or less param (example5)
* multiple routes (example6)

-------------------------------------------------

# advanced routing

* deterministic (example7)
* put it together (example8)

-------------------------------------------------

# decorate

* request (example9)
* reply (example10)

-------------------------------------------------

-> # plugins <-

-------------------------------------------------

# plugin

    exports.register  = function (server, options, next) {
     // Plugin
    }
    exports.register.attributes = {
     name, version, pkg, dependencies, multiple
    }

-------------------------------------------------

# plugin walkthrough

* routing (example1/server1)
* dependencies (example2/server2)
* with nes (example3/server3)

-------------------------------------------------

-> # validation <-

-> *Credit: Lloyd Benson* <-

-------------------------------------------------

# validation overview

* object schema description language
* validator for javascript objects
* joi used useful in non-hapi projects
* built-in helpers for hapi
* payload/params/response validation
* https://github.com/hapijs/joi

-------------------------------------------------

# validation examples

* schema + validate (example1)
* failed validation (example2)
* fancy options (example3)
 - alphanum
 - lowercase
 - creditCard
 - + many more

-------------------------------------------------

# notes on validating

* keys are optional by default
* rules are defined in an additive fashion
* rules are evaluated in order after whitelist and blacklist checks

-------------------------------------------------

# fancy validation examples

* user (example4)
* with hapi (example5/server5)

-------------------------------------------------

# joi schema function by types

* any()
* array()
* boolean()
* date()
* func()
* number()
* object(schema)
* string()

-------------------------------------------------

-> # BREAK <-

-------------------------------------------------

-> # architecture recap <-

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

-> time to cook up something good <-
                (
               )  )
           ______(____
          (___________)
           /         \\
          /           \\
         |             |
       ____\\             /____
    ()____'.__      __.'____()
    jgs  .'` .'```'. `-.
        ().'`       `'.()

-------------------------------------------------

-> Open *spatula* <-
