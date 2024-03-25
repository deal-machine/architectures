# Microservices

## Basic concepts
- common applications
    - any programming language
    - any architecture
- defined goals
    - delimited context
- is part of an ecosystem
- are independent
    - own database 
- all time communication

## Microservices **vs** Monolithic
- service-defined domain **vs** all domains in a service
- multiple technologies **vs** one technology
- less risk on deploy **vs** greater risk
- one team per microservice **vs** many teams per project

## when do I need to use microservices?
- team scalability
- delimited context
- maturity in continuous delivery
- maturity in technology and team
- scalability by parts of the system
- specific technologies for different solutions

## when do I need to use monolithic?
- POC - proof of concept
- new projects
- domain discover
- more technology governance
- easy to train devs
- compatibility and maintenance
- shared kernel

## Monolithic to Microservices = Migration
- split contexts (DDD)
- check dependencies
- plan the database migration process
- use events
- data duplication
- eventually consistent
- CI/CD
- environments
- tests
- start slowly
