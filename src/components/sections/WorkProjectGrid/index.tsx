"use client";

import { projects } from "../ProjectCardList/constant";
import WorkProjectCard from "./WorkProjectCard";
import { motion } from "motion/react";

function WorkProjectGrid() {
  return (
    <section className="container py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <WorkProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkProjectGrid;
