---
title: "A Bit More Strategy"
date: 2024-08-06
---

I came up with some code examples to demonstrate the Strategy Pattern in Java. They showcase the polymorphic nature
and how strategy pattern can be used to instantiate a method on the fly.

```java
// Strategy Interface
interface BakingStrategy {
    void bake();
}

// Concrete Strategies
class SourdoughStrategy implements BakingStrategy {
    public void bake() {
        System.out.println("Baking sourdough bread...");
    }
}

class RyeBreadStrategy implements BakingStrategy {
    public void bake() {
        System.out.println("Baking rye bread...");
    }
}

// Context
class Bakery {
    private BakingStrategy strategy;

    public void setBakingStrategy(BakingStrategy strategy) {
        this.strategy = strategy;
    }

    public void bakeBread() {
        strategy.bake();
    }
}


class BakeryTest {
    public static void main(String[] args) {
        Bakery bakery = new Bakery();
        bakery.setBakingStrategy(new SourdoughStrategy());
        bakery.bakeBread();   //Prints: "Baking sourdough bread..."

        bakery.setBakingStrategy(new RyeBreadStrategy());
        bakery.bakeBread();  //Prints: "Baking rye bread..."
    }
}
```