---
layout: project
title: "Jules: Type stability in the Julia language (2020–2021)"
---

A formal definition of **type stability** and its impact on JIT compilation
in the {{site.data.links.mdlinks.julialang}} language,
with an analysis of the prevalence of type-stable code in popular Julia packages.
[Type stability]({{site.data.links.websites.typestability}}) of methods
is important for performance of Julia programs, because it enables several
key compiler optimizations such as specialization and devirtualization of
dynamically dispatched method calls.

The formal definition is given with respect to Jules, a miniature language
with multiple dynamic dispatch and an optimizing JIT compiler which performs 
type-based method specialization and devirtualization.  
{% include link-button.html name="Main project page"
  link="https://a-pelenitsyn.github.io/Projects/stability/" %}

<iframe width="700" height="400" src="https://www.youtube.com/embed/XnUDdPonKlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* {% include publication.html paper-key="OOPSLA 2021"
    paper-data=site.data.papers abstract-open="true" %}