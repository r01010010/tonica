# Tónica

An architecture which aims to have a whole view of all use cases in a project thanks to a list of actions. 

Every action will have a keyword and will be performed by an Actor, to follow an intuitive flow. The actions and the actors can have middlewares associated.

## Try it
```
yarn install
yarn start
```
## Benefits

- Architecture follows the gramatical logic. There's a subject, there's an action, there's an object and a context. It also follows the typical use case logic from UML, CUCUMBER or SCRUM cards like `as a USER I want to CREATE A WORKSPACE _ when blablabla`. To lookup in the code could be easier as the structure will follow this same grammar order. Just go to 'actions' and look for USER_CREATE_WORKSPACE, there you'll have all reusable logic.
- Is easy to think about it, is easy to map PO's requirements as user stories to our architecture, they're exactly a map.
- Is easy to add/eliminate any layer to all actions or actors, just by using middleware (logging, analytics, permissions, etc).
- Is easy then to get a whole idea of what aplication can do in a configurable file/table like a SourceOfTrue.js, in which you define all possible actions, all possible middlewares, all possible actors and its combinations. You can even do an html version to discuss with PO's and use it as a source of true in any discussion.
- Errors could be tagged with the action name, and any other data like actor, or context. This could be very interesting when looking for them in any error logging system like sentry.

## The Heroes
### The Runner
Basically there will be a base class which is an action runner, with a method which is `do` which receives `actor/subject`, `action`, `object` and `context`, and run the middlewares associated to the runner.

Every actor and every action is a runner and is configured with its particular (or not) middleware.

### Actors
The actors will be particular implementations of `Runner`, there could be:

- User
- System
- UI
- etc

### Actions
They will be defined in a source of true config file, which will be programatically used, (JSON for example), but at the same time can be exposed to PO's so they can serve as a contract between them and developers.

### Middleware
- Layers, layers, layers of everything you can imagine, actionable by env variables or whatever you want. Logging, permissions, anything!.

## Flow

1. The view, in the example a react component, calls to an action through its actor: `user.createWorkspace(ws)`.
2. The actor, which inherits from a `runner` class, execs the correspondant action.
3. The runner logic iterates through all actor's middlewares and finally calls the `action.exec` function.
4. The action is also a runner, so the same, action.exec calls the parent's exec that will run all action's middleware plus the particular logic of the action.
5. If action thinks is necesary, updates store.