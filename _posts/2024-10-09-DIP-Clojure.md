---
title: "Dependency Inversion Principle in Clojure"
date: 2024-10-09
---

The Dependency Inversion Principle (DIP) is the last principle of the SOLID framework, and it’s one of the most impactful 
for decoupling your code. DIP states "High-level modules should not depend on low-level modules. Both should depend on 
abstractions. Abstractions should not depend on details. Details should depend on abstractions." In simpler terms, DIP 
encourages us to rely on abstractions (such as interfaces and protocols) instead of specific implementations. This keeps
high-level logic independent of low-level details, making the system more flexible and easier to maintain.

### Why DIP matters

Without DIP, you end up with tightly coupled systems where changes to low-level modules (like database connections, file 
systems, or external APIs) ripple through your entire codebase. This leads to fragile code that’s difficult to refactor 
and test.

Take this code for example:

```clojure
(defn send-notification [user message]
  (send-email user message)) 
```

This code works just fine for sending and email, but what if you wanted that notification to be sms, a push notification, 
or code that tapped on the side of a parrots cage to get them to notify you? You'd have to re-write this completely.

We can loosen the coupling by introducing a protocol that abstracts away the details of how the notification is sent.

```clojure
(defprotocol NotificationService
  (send [this user message]))

(defrecord EmailService []
  NotificationService
  (send [this user message]
    (println "Sending email to" user "with message:" message)))

(defrecord SMSService []
  NotificationService
  (send [this user message]
    (println "Sending SMS to" user "with message:" message)))
```

Now, our high-level function depends only on the abstraction (the protocol), not on the specific implementations:
```clojure
(defn send-notification [service user message]
  (send service user message))
```

You can inject the apropriate service when calling the function.

```clojure
(def email-service (->EmailService))
(def sms-service (->SMSService))

(send-notification email-service "user@example.com" "Your order has been shipped.")
(send-notification sms-service "555-1234" "Your order has been shipped.")
```

By using dependency injection (passing in the service), we achieve flexibility. If the notification method needs to 
change, we don’t modify the core logic—just the service that gets passed.


### Testing with DIP

DIP makes testing easy because you can create mock implementations for testing purposes:

```clojure
(defrecord MockService []
  NotificationService
  (send [this user message]
    (println "Pretending to send a message to" user)))

(let [mock-service (->MockService)]
  (send-notification mock-service "user@example.com" "Test message"))
```

This is where the power of the DIP comes into play: by depending on abstractions, you can test high-level logic in 
isolation without worrying about the side effects of external systems like email servers or SMS gateways. I've used this
recently to test database implementations. After the tests that are database specific, everything else gets tested to an 
atom (memory) instead of the database.


The Dependency Inversion Principle (DIP) helps you write decoupled, maintainable, and flexible code. In Clojure, you can 
apply DIP effectively using protocols and dependency injection, keeping high-level logic independent of low-level 
implementations.

By following DIP, you’ll find that your code is more modular, easier to test, and flexible enough to accommodate changes 
without significant rewrites.