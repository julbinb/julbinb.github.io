---
layout: project
title: "Decidable subtyping for Julia (2021–…)"
---

Decidable subtyping for the {{site.data.links.mdlinks.julialang}} language.

{% include contactme-bubble.html %}

The main publication, [PLDI 2024](/papers#pldi2024),
presents a sound and complete subtyping algorithm
for a restricted grammar of a subset of the Julia types,
which include **bounded existential types**.
The restricted types are _stratified_ as method signatures (which can use
bounded existential types freely) over value types (which are restricted
to use-site variance).

The [PhD thesis](/papers#phdthesis) extends the subtyping algorithm with
distributivity in a sound but incomplete manner.
The thesis also covers nominal subtyping between user-defined datatypes.

An empirical study of the source code of registered Julia packages shows
that nearly all type annotations written in practice already conform
to the proposed stratification.
However, more work needs to be done to evaluate its potential effect
on the language runtime.

**Status:** this is an ongoing work;
for updates on this project, see [GitHub](https://github.com/prl-julia/jb-thesis).


## Publications

* {% include publication.html paper-key="PLDI 2024"
    paper-data=site.data.papers abstract-open=true %}
* **PhD Thesis:** {% include publication.html paper-key="Decidable Subtyping of Existential Types for the Julia Language"
    refid=true paper-data=site.data.papers %}
