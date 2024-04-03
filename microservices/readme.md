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

## 9 Characteristics by **Martin Fowler**

<div align="right">

[microservices](https://martinfowler.com/articles/microservices.html)

</div>

### Componentization via Services
> A component is a unit of software that is independently replaceable and upgradeable
### Organized around Business Capabilities
> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure -- Melvin Conway, 1968
### Products not Projects
> The product mentality, ties in with the linkage to business capabilities. Rather than looking at the software as a set of functionality to be completed, there is an on-going relationship where the question is how can software assist its users to enhance the business capability.
> **you build, you run it**
### Smart endpoints and dumb pipes
> Be of the web, not behind the web -- Ian Robinson
### Decentralized Data Management
> The cost of fixing mistakes is less than the cost of lost business under greater consistency. 
> **consumer driven**
### Infrastructure Automation
>  Tooling for creating artefacts, managing codebases, standing up simple services or for adding standard monitoring and logging are pretty common now.
> **Make it easy to do the right thing**
### Design for failure
> they can tolerate the failure of services - 
> **Circuit Breaker, Bulkhead and Timeout**
### Evolutionary Design
> **replaceability, modular design** - 
>  The downside is that you have to worry about changes to one service breaking its consumers.

<br><br>

<div align="center">
<h3>Microservice Trade-Offs</h3>

<img src="https://martinfowler.com/articles/microservice-trade-offs/card.png" label="microservice-trade-offs" />

</div>

<br><br>

## Resilience
