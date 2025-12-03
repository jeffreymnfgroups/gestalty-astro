import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const aboutBannerSection = defineCollection({
  loader: glob({
    pattern: "about-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    left_image: z.string(),
    right_image: z.string(),
    quote: z.object({
      avatar: z.string(),
      name: z.string(),
      designation: z.string(),
      content: z.string(),
    }),
  }),
});

export const blogSection = defineCollection({
  loader: glob({
    pattern: "blog.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const ctaSection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const changelogSection = defineCollection({
  loader: glob({
    pattern: "changelog.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        short_title: z.string(),
        image: z.string(),
        date: z.string(),
        version: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const clientsSection = defineCollection({
  loader: glob({
    pattern: "clients.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
});

export const faqSection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        active: z.boolean().optional(),
      }),
    ),
  }),
});

export const featuresExplanationSection = defineCollection({
  loader: glob({
    pattern: "features-explanation.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    list: z.array(
      z.object({
        row: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      }),
    ),
  }),
});

export const featuresGridSection = defineCollection({
  loader: glob({
    pattern: "features-grid.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

export const featuresSection = defineCollection({
  loader: glob({
    pattern: "features.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        description: z.string().optional(),
        bulletpoints_y: z
          .array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
        bulletpoints_x: z
          .array(
            z.object({
              icon: z.string(),
              title: z.string().optional(),
              description: z.string(),
            }),
          )
          .optional(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

export const homeBannerSection = defineCollection({
  loader: glob({
    pattern: "home-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bg_image: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        height: z.string().optional(),
      }),
    ),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

export const howItWorksSection = defineCollection({
  loader: glob({
    pattern: "how-it-works.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const integrationSection = defineCollection({
  loader: glob({
    pattern: "integration.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        list: z.array(z.string()),
      }),
    ),
  }),
});

export const ourTeamSection = defineCollection({
  loader: glob({
    pattern: "our-team.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        company: z.string(),
      }),
    ),
  }),
});

export const ourValuesSection = defineCollection({
  loader: glob({
    pattern: "our-values.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
  }),
});

export const pricingSection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    plans_labels: z.array(z.string()),
    plans: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        price_prefix: z.string(),
        price_monthly: z.string(),
        price_yearly: z.string(),
        price_description_monthly: z.string(),
        price_description_yearly: z.string(),
        features: z.array(z.string()),
        badge: z.object({
          enable: z.boolean(),
          label: z.string(),
        }),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const originStorySection = defineCollection({
  loader: glob({
    pattern: "origin-story.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const hiddenCrisisSection = defineCollection({
  loader: glob({
    pattern: "hidden-crisis.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    core_problem: z.string(),
  }),
});

export const theQuestionSection = defineCollection({
  loader: glob({
    pattern: "the-question.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    questions: z.array(z.string()),
    discovery_title: z.string(),
    discovery_content: z.string(),
  }),
});

export const theSolutionSection = defineCollection({
  loader: glob({
    pattern: "the-solution.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    framework_title: z.string(),
    framework_content: z.string(),
    transformation_title: z.string(),
    transformations: z.array(
      z.object({
        transformation: z.string(),
        impact: z.string(),
      }),
    ),
    beyond_content: z.string(),
  }),
});

export const whatWeBuiltForSection = defineCollection({
  loader: glob({
    pattern: "what-we-built-for.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    core_belief: z.string(),
    list: z.array(z.string()),
    what_makes_different: z.string(),
  }),
});

export const visionMissionSection = defineCollection({
  loader: glob({
    pattern: "vision-mission.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    vision: z.object({
      title: z.string(),
      content: z.string(),
    }),
    mission: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

export const companyEvolutionSection = defineCollection({
  loader: glob({
    pattern: "company-evolution.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    phases: z.array(
      z.object({
        title: z.string(),
        duration: z.string(),
        description: z.string(),
        list: z.array(z.string()).optional(),
      }),
    ),
    impact_title: z.string(),
    impact_list: z.array(z.string()),
  }),
});

export const expertiseSection = defineCollection({
  loader: glob({
    pattern: "expertise.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const joinRevolutionSection = defineCollection({
  loader: glob({
    pattern: "join-revolution.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(z.string()),
  }),
});

export const philosophyBannerSection = defineCollection({
  loader: glob({
    pattern: "philosophy-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    subheadline: z.string(),
    description: z.string(),
    left_image: z.string(),
    right_image: z.string(),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
        variant: z.string().optional(),
      }),
    ),
  }),
});

export const effortProgressSection = defineCollection({
  loader: glob({
    pattern: "effort-progress.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    core_issue: z.string(),
  }),
});

export const learningAcumenSection = defineCollection({
  loader: glob({
    pattern: "learning-acumen.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    what_it_does_title: z.string(),
    what_it_does_list: z.array(z.string()),
    result_title: z.string(),
    result_description: z.string(),
    result_list: z.array(z.string()),
  }),
});

export const platformEthosSection = defineCollection({
  loader: glob({
    pattern: "platform-ethos.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    we_connect_title: z.string(),
    we_connect_list: z.array(z.string()),
    commitment_title: z.string(),
    commitment_description: z.string(),
  }),
});

export const adultLearnersSection = defineCollection({
  loader: glob({
    pattern: "adult-learners.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(z.string()),
    closing: z.string(),
  }),
});

export const learningPhilosophySection = defineCollection({
  loader: glob({
    pattern: "learning-philosophy.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    parallel_title: z.string(),
    parallel_description: z.string(),
    what_it_means_title: z.string(),
    what_it_means_list: z.array(z.string()),
    closing: z.string(),
  }),
});

export const scienceApproachSection = defineCollection({
  loader: glob({
    pattern: "science-approach.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    foundations: z.array(
      z.object({
        title: z.string(),
        tagline: z.string(),
        core_principle: z.string(),
        what_it_does: z.string().optional(),
        pillars: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
        why_it_matters: z.string(),
        active: z.boolean().optional(),
      }),
    ),
  }),
});

export const learningEngineSection = defineCollection({
  loader: glob({
    pattern: "learning-engine.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    framework_title: z.string(),
    framework_description: z.string(),
    cycle_steps: z.array(z.string()),
  }),
});

export const expectedOutcomesSection = defineCollection({
  loader: glob({
    pattern: "expected-outcomes.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    outcomes: z.array(
      z.object({
        area: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const mentorshipBannerSection = defineCollection({
  loader: glob({
    pattern: "mentorship-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    left_image: z.string(),
    right_image: z.string(),
  }),
});

export const expertGuidanceSection = defineCollection({
  loader: glob({
    pattern: "expert-guidance.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(z.string()),
  }),
});

export const scienceBackedMentorshipSection = defineCollection({
  loader: glob({
    pattern: "science-backed-mentorship.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const mentorshipFeaturesSection = defineCollection({
  loader: glob({
    pattern: "mentorship-features.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        list: z.array(z.string()),
      }),
    ),
  }),
});

export const ourMentorsSection = defineCollection({
  loader: glob({
    pattern: "our-mentors.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const mentorToolsSection = defineCollection({
  loader: glob({
    pattern: "mentor-tools.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    tools: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const mentorshipHowItWorksSection = defineCollection({
  loader: glob({
    pattern: "mentorship-how-it-works.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    tiers: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const parentalPartnershipSection = defineCollection({
  loader: glob({
    pattern: "parental-partnership.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const mentorshipOutcomesSection = defineCollection({
  loader: glob({
    pattern: "mentorship-outcomes.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    outcomes: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const featuresWhoItsForSection = defineCollection({
  loader: glob({
    pattern: "features-who-its-for.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    sections: z.array(
      z.object({
        role: z.string(),
        features: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      }),
    ),
  }),
});

export const featuresDifferentiatorsSection = defineCollection({
  loader: glob({
    pattern: "features-differentiators.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
  }),
});

export const featuresBenefitsSection = defineCollection({
  loader: glob({
    pattern: "features-benefits.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    table: z.object({
      headers: z.array(z.string()),
      rows: z.array(
        z.object({
          cells: z.array(z.string()),
        }),
      ),
    }),
  }),
});

export const featuresFinalCtaSection = defineCollection({
  loader: glob({
    pattern: "features-final-cta.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    tagline: z.string(),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
        primary: z.boolean(),
      }),
    ),
    alternative_buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

export const howItWorksBannerSection = defineCollection({
  loader: glob({
    pattern: "how-it-works-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const howItWorksJourneySection = defineCollection({
  loader: glob({
    pattern: "how-it-works-journey.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(
      z.object({
        step_number: z.string(),
        icon: z.string(),
        title: z.string(),
        short_description: z.string(),
        list: z.array(z.string()),
      }),
    ),
  }),
});

export const howItWorksDailyRoutineSection = defineCollection({
  loader: glob({
    pattern: "how-it-works-daily-routine.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    periods: z.array(
      z.object({
        period: z.string(),
        icon: z.string(),
        activities: z.array(z.string()),
      }),
    ),
  }),
});

export const howItWorksWhyChooseSection = defineCollection({
  loader: glob({
    pattern: "how-it-works-why-choose.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const howItWorksOutcomesSection = defineCollection({
  loader: glob({
    pattern: "how-it-works-outcomes.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    stats: z.array(
      z.object({
        icon: z.string(),
        value: z.string(),
        label: z.string(),
      }),
    ),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      buttons: z.array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      ),
    }),
  }),
});

export const problemStatementSection = defineCollection({
  loader: glob({
    pattern: "problem-statement.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const solutionOverviewSection = defineCollection({
  loader: glob({
    pattern: "solution-overview.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const diagnosticLensSection = defineCollection({
  loader: glob({
    pattern: "diagnostic-lens.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cta_text: z.string().optional(),
    cards: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        solution: z.string(),
        tags: z.array(z.string()),
        color: z.string(),
      }),
    ),
  }),
});

export const strategicLayerSection = defineCollection({
  loader: glob({
    pattern: "strategic-layer.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
  }),
});

export const pathToExcellenceSection = defineCollection({
  loader: glob({
    pattern: "path-to-excellence.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    table: z.object({
      headers: z.array(z.string()),
      rows: z.array(
        z.object({
          area: z.string(),
          before: z.string(),
          after: z.string(),
        }),
      ),
    }),
  }),
});

export const scienceFoundationSection = defineCollection({
  loader: glob({
    pattern: "science-foundation.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pillars: z.array(
      z.object({
        title: z.string(),
        tagline: z.string(),
        list: z.array(z.string()),
      }),
    ),
  }),
});

export const socialProofSection = defineCollection({
  loader: glob({
    pattern: "social-proof.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    quote: z.string(),
    table: z.object({
      headers: z.array(z.string()),
      rows: z.array(
        z.object({
          traditional: z.string(),
          gestalty: z.string(),
        }),
      ),
    }),
    supporting_quote: z.string(),
  }),
});
