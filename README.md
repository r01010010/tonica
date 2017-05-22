# AOD: Action Oriented Development

Just playing around with this concept. The idea came somehow playing with redux and their actions, and the need to introduce permissions in frontend part. I realized we made the same actions in many different places/ways, for example, adding a workspace could be done in many different places and ways, and there were some restrictions related to this action/use case.

Basically there will be a base class which is an action runner, with a method which is `do` which receives `actor/subject`, `action`, `object` and `context`. 

The actors could be:

- User
- System
- UI
- etc

Every actor is a task runner and is configured with its concrete (or not) middleware.

## Benefits

- Architecture follows the gramatical logic. There's a subject, there's an action, there's an object and a context. It also follows the typical use case logic from UML. To lookup in the code could be easier as the structure will follow this same grammar order.
- Is easy to think about it, is easy to map PO's requirements as user stories to our architecture, they're exactly a map.
- Is easy to add/eliminate any layer to all actions, just by using middleware (logging, analytics, permissions, etc).
- Is easy then to get a whole idea of what aplication can do in a configurable file/table like a SourceOfTrue.js, in which you define all possible actions, all possible middlewares, all possible actors and its combinations. You can even do a html version to discuss with PO's and use it as a source of true in any discussion.