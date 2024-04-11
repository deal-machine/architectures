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
> Resilience is the ability of the system to adapt in case of failure, with intentionality and strategies

### Resilience Strategies
1. protect and be protectable
    - **self-preservation**
    - **don't hit a dead dog**
    - a slow service is worse than a offline service
2. health check
    - create a way to check system integrity
    - self healing - **stop requests, process requests and self healing**
    - smart health check - **passive and active**
3. rate limiting
    - based on what it was designed to support
    - use groups and preferences by client
4. circuit breaker
    - **closed circuit** - all requests are acceptable
    - **open circuit** - requests do not arrive 
    - **half open** - limited requests to check the system availability
5. API Gateway
    - define policies
    - implement common resources
6. service Mesh
    - control the traffic
    - monitoring all communications
    - **use proxies**
    - mTLS
    - example: *Istio*
    - implement: circuit breaker, retry, timeout, fault injection...
7. asynchronous
    - prevents data loss
    - process when you are ready
8. retry
    - backoff algorithm
    - linear - without backoff
    - exponential backoff
    - **jitter** (send retry with random time)
9. delivery guarantees
    - **acknowledgement**
        - kafka (none 0, leader 1, all -1)
        - rabbitMQ
10. complex situations (how to ensure resilience?)
    - message broker crashes
    - lost messages
    - offline system
11. transactional outbox
    1. save message in the database
    2. send message to message broker
    3. delete message from database
12. guarantee of receipt
    - **auto ack** = false + commit
    - prefetch align on volumetry
13. idempotence and politics of fallback
    - duplicity
    - independency
    - fallback
14. observability
    - app performance monitoring (APM)
    - tracing distributed
    - custom metrics
    - custom spans
    - open telemetry

## Choreography and Orchestration

- death star
- API strategies