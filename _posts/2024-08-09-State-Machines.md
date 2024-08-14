---
title: "Another Cog in the State Machine"
date: 2024-08-09
---

I'm having to do a major refactor of my tic-tac-toe game. A lot of the core functions have printables attached to them
which worked out well for when the game was just terminal based. But now it's getting a GUI and that does not work out as
well. My first instinct was to write a multi-method for every single one but my mentor pointed out that would lead to
a lot of duplicate code. He told me to look into State Machines, so that will be the subject of today's post.

### What is a State Machine?
At it's core, a state machine is a computational model that consists of:

1. **States**: A finite set of conditions or configurations in which the system can exist.
2. **Transitions**: Rules that define how the system moves from one state to another based on events or conditions.
3. **Events**: Inputs or triggers that cause transitions between states.
4. **Initial State**: The state in which the system begins.
5. **Final State**: State where teh system stops if it reaches them.

### Types of State Machines
There are two primary types of state machines.
1. **Deterministic Finite Automation**: In a DFA, for each state, there is exactly one transition for each possible event.
This means that given a current state and an event the next state is fully determined.
2. **Nondeterministic Finite Automation**: In an NFA, for each state, there can be multiple possible transitions for a
single event, or no transition at all. The system can choose any of the possible transitions.

### Why are State Machines Important?
State machines are valuable because they provide a clear and structured way to model and implement systems that have a
finite number of states and well-defined behaviors. They help developers reason about the system's behavior, ensure that 
all possible states and transitions are considered, and simplify the debugging and maintenance of complex systems.

By breaking down a system into states and transitions, state machines also facilitate modular design. Each state and 
transition can be implemented, tested, and understood in isolation, making it easier to build and manage large complex
systems.
