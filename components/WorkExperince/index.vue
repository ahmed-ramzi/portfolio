<template>
  <CommonMainFrame>
    <template #title>My Work Experience</template>
    <div>
      <WorkExperinceJobDetail v-for="exp in experiences" :key="exp.company" :exp="exp" />
    </div>
    <section class="text-end">
      <a link href="https://www.linkedin.com/in/ahmedramzimuthana/" target="_blank" rel="noopener" class="inline-flex items-center">
        <span> See more </span>
        <span><Icon name="chevron-right" class="w-4 h-4" /></span
      ></a>
    </section>
  </CommonMainFrame>
</template>

<script setup lang="ts">
import { JobExperince } from "~/types/types"

const experiences: JobExperince[] = [
  {
    title: "Frontend/ Automation Testing Head Developer",
    period: "Dec 2020 - Present",
    company: "Dataddo",
    description:
      "-◦Strong experience in modern Javascript frameworks and web technologies<br>-◦ Expertise in developing sophisticated algorithms and optimizing websites for SEO.<br>-◦ Expertise in TypeScript and developing robust and scalable web applications<br>-◦ Experience migrating legacy code and using state management libraries.<br>-◦ Expertise in building multi-language web applications using i18n libraries<br>-◦ Proficiency in building testing scripts and building Git pipelines to facilitate continuous integration and deployment.",
    loaction: "Berlin",
    color: "green",
  },
  {
    title: "Solutions Engineer / Backend Developer / Data Integration Specialist",
    period: "Dec 2020 - Aug 2021",
    company: "Dataddo",
    description:
      "-◦ Advance experience in backend development using modern technologies, including databases<br>-◦ Expertise in designing and building scalable backend systems that meet complex business requirements<br>-◦ Knowledge and expertise with CRUD-based options and applications<br>-◦ Knowledge of software design patterns and software architecture principles<br>-◦ Experience collaborating with cross-functional teams to deliver software solutions that meet business needs<br>-◦ Proficiency in conducting technical assessments, designing testing strategies, and troubleshooting software issues<br>-◦ Excellent communication skills and the ability to explain technical concepts to non-technical stakeholders and clients",
    loaction: "Prague",
    color: "red",
  },

  {
    title: "Trainer & Developer",
    period: "May 2017 - Aug 2017",
    company: "KidoCode",
    description:
      "-◦ Experienced trainer for young programmers between the ages of 4-20, providing intensive training in various programming tools.<br>-◦ Skilled in using programming tools such as Python, Flask, MongoDB (NoSQL), HTML, Javascript, CSS, and Ardunio (using the board & C++).<br>-◦ Proficient in applying Mathematics and Physics concepts in programming, such as Trigonometry, Algebra, and Newton's Laws, to facilitate problem-solving through coding.<br>-◦ Participated in Microsoft's 'DigiGirlz' event in 2017, collaborating with KidoCode to teach over 144 young girls how to code and emphasizing the fun and creativity that coding can offer.",
    loaction: "Malaysia",
    color: "yellow",
  },
]
</script>
