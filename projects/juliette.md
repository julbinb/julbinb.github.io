---
layout: project
title: "Juliette: a formalization of world age and eval in Julia (2020–…)"
sidebar_link: false
---

A formalization of **world age**
in the [Julia]({{site.data.links.websites.julialang}}) language.
[World age](https://docs.julialang.org/en/v1/manual/methods/#Redefining-Methods)
is a mechanism that enables efficient and relatively simple implementation
of multiple dispatch in the presence of `eval`.
Namely, the world-age semantics allows Julia to optimize methods and method calls
at certain points of the program execution,
without ever needing to de-optimize them on the fly.
{% include link-button.html name="GitHub"
  link="https://github.com/julbinb/juliette-wa" %}  
{% include jump-button.html link="#worldage" name="the description of world age" %}
{% include jump-button.html link="#papers" name="papers" %}

{% include contactme-bubble.html %}

<iframe width="700" height="400" src="https://www.youtube.com/embed/d6lTCnhdbqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What's in here?

* The formalization of the world-age semantics in a core calculus
  called **Juliette**. The calculus operates with explicit method tables
  and models `eval` with a simpler global-evaluation construct.

* An [implementation](https://github.com/julbinb/juliette-wa/tree/master/src/redex)
  of the calculus as a Redex model
  ([Redex](https://redex.racket-lang.org/) is a Racket-based DSL)
  with a [transpiler](https://github.com/julbinb/juliette-wa/tree/master/src/jl-transpiler)
  from Julia to Juliette
  (the calculus is instantiated with a small number of standard types
   and functions for arithmetic and equality).

* [Static](https://github.com/julbinb/juliette-wa/tree/master/src/analysis/static-analysis)
  and [dynamic](https://github.com/julbinb/juliette-wa/tree/master/src/analysis/dynamic-analysis)
  analysis of `eval` usage in registered Julia package (implemented in Julia).

## <span id="papers">Papers</span>

* {% include publication.html paper-key="OOPSLA 2020"
    paper-data=site.data.papers abstract-open=true %}
* {% include publication.html paper-key="OOPSLA 2020 Extended (arXiv)"
    paper-data=site.data.papers %}

### Common questions

* TBD

### Informal

* [Twitter-thread about OOPSLA 2020 paper](https://twitter.com/julbinb/status/1317195401846554624?s=20)

## <span id="worldage">What is world age?</span>

World age is a language mechanism that prevents
new methods (functions) defined in `eval` to be called
from an already running function.
For example, consider the following program:

```julia
f(x) = 1

# g(x) calls f(x) once, then
# redefines f(x) in eval, and calls f(x) again
function g(x)
  v1 = f(x)
  v2 = (eval(:(f(x) = 0)); f(x))
  v1 * v2
end

# at this point, there are two methods:
# f(x) = 1 and g(x) = ...
g(5)     # 1

# at this point, method f is redefined:
# f(x) = 0
g(666)   # 0
```

Without the world age feature, call `g(5)` would return 0. This is because
the first call to `f` returns 1, the second would return 0
(because `f` was redefined in `eval`), and 1*0 is 0.

However, in Julia, `g(5)` will actually return 1. Why?
Because the redefinition `f(x) = 0` from `eval` is not visible
while `g(5)` is running.
We can think of this mechanism in the following way:
Julia's run-time takes a snapshot of method definitions before the call `g(5)`,
and then uses the snapshot to resolve nested method calls.  
But once `g(5)` is done, the new definition of `f` becomes visible,
so the next call `g(666)` will return 0.
