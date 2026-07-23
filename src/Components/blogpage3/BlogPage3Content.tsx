"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function BlogPage3Content() {
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-12 text-gray-700 text-lg leading-relaxed">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <p className="text-xl text-gray-800 font-medium leading-loose">
                        In every major marketing shift over the past decade, one pattern has been remarkably consistent: the brands that win are the ones that can translate their commercial goals into human stories. For years, storytelling was the domain of content. More videos, more formats, more influencers, more noise. But as digital clutter expands and attention compresses, there is a structural change unfolding in how stories are consumed — and more importantly, in how they are experienced.
                    </p>
                    <p className="font-bold text-[#da2929] text-xl">
                        This is where reward-led storytelling enters the conversation. Not as a tactic.
                    </p>
                    <p>
                        Not as a promotional lever. But as a foundational shift in how brands design participation, emotion and relevance.
                    </p>
                </motion.div>

                <hr className="border-gray-200" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Why Storytelling Matters More Than Ever — Especially in Reward Marketing
                    </h2>
                    <p>
                        Rewards, historically, were designed to create action. But when rewarding and storytelling are brought together intentionally, something interesting happens: the reward no longer sits outside the story; it becomes a narrative device inside it.
                    </p>
                    <p>
                        You can see this principle in action through campaigns where the reward didn&rsquo;t interrupt the story — it amplified it.
                    </p>

                    <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-l-4 border-[#da2929] hover:shadow-md transition-shadow space-y-4">
                        <h4 className="font-bold text-gray-900">Britannia&rsquo;s Milk Bikis Nicknames Campaign</h4>
                        <p className="text-sm">
                            Britannia&rsquo;s Milk Bikis Nicknames campaign tapped into childhood nostalgia by inviting families to recreate moments around the playful nicknames we all grew up with. The personalised branded videos became the real highlight — turning these memories into moments families proudly shared. The reward simply nudged behaviour; it was the emotional connection and sense of recognition that moved families from noticing the pack to purchasing and participating, converting nostalgia into genuine sales momentum.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 space-y-4">
                        <h4 className="font-bold text-gray-900">HP&rsquo;s Race to Space</h4>
                        <p className="text-sm">
                            Similarly, HP&rsquo;s Race to Space drew from the brand&rsquo;s longstanding focus on environmental impact. Consumers submitted collages inspired by sustainability themes, and the most compelling entries won an opportunity for child–parent duos to visit NASA. Although the NASA experience was the narrative peak, the journey truly unfolded in the creativity and personal meaning behind each submission and acted as a powerful purchase driver, pushing consumers to buy, engage, and submit.
                        </p>
                    </div>

                    <p className="font-semibold text-gray-900 text-xl">
                        This is the core insight: storytelling gives rewards meaning, and rewards give storytelling momentum.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Why Reward-Led Storytelling Will Outperform Traditional Content-Led Storytelling
                    </h2>
                    <p>
                        Traditional content asks consumers to feel something. Reward-led storytelling asks them to do something. That behavioural difference changes the outcome.
                    </p>
                    <p>
                        A static story competes for attention; an active story creates involvement. And involvement builds memory far more effectively than exposure. Digital media saturation has made it increasingly difficult for content to deliver impact without disproportionate investment. But reward-led narratives benefit from a different psychological pathway — one rooted in anticipation, agency, and personal gain.
                    </p>

                    <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-l-4 border-[#da2929] hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 mb-2">Tic Tac&rsquo;s &ldquo;Gentle Messages&rdquo; Campaign</h4>
                        <p className="text-sm text-gray-700">
                            This was evident in the Tic Tac&rsquo;s &ldquo;Gentle Messages&rdquo; campaign. Consumers sent a short, uplifting message to someone, and each message unlocked a small reward. What made it powerful was that the act itself became the narrative. Consumers weren&rsquo;t just reading a brand story; they were participating in one. As more people shared messages, the campaign naturally grew in visibility because every interaction generated another meaningful moment.
                        </p>
                        <p className="text-sm text-gray-800 font-semibold mt-3">
                            The reward didn&rsquo;t push the story forward — the consumer did.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        How Brands Can Apply Reward-Led Storytelling Effectively
                    </h2>
                    <p>
                        For brands considering this shift, the objective is not to bolt a reward onto a narrative, but to design the narrative around behaviours that matter.
                    </p>
                    <p className="font-semibold text-gray-900">
                        There are three principles that consistently differentiate effective reward-led storytelling:
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                num: "First",
                                title: "The reward must reinforce the emotion of the story, not interrupt it.",
                                desc: "Recognition, progress, access, and personalisation often outperform discounts because they extend the narrative rather than break it."
                            },
                            {
                                num: "Second",
                                title: "The story must be built to scale participation, not views.",
                                desc: "The success of campaigns like Britannia or HP came from progressive engagement loops — each action opened the door to the next, creating a natural arc."
                            },
                            {
                                num: "Third",
                                title: "The reward system must deliver instantly and reliably.",
                                desc: "The consumer&rsquo;s emotional cadence cannot be disrupted. When the story and reward flow seamlessly, participation becomes habitual."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <span className="text-[#da2929] font-black text-sm shrink-0 mt-0.5">{item.num}.</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#0B2149] text-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-lg font-bold mb-2 text-[#da2929]">And a Fourth Dimension</h4>
                        <p className="text-sm text-gray-300">
                            And increasingly, a fourth dimension shapes success: gamification and technology. Modern engagement is no longer linear; it is built on progression, micro-actions, real-time feedback, and personalised journeys. Gamified structures — levels, streaks, milestones, unlocks — give shape to the story, while technology ensures these pathways function at scale and without friction.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        How Will Reward-led Storytelling Change Brand Outcomes
                    </h2>
                    <p>
                        Brands that adopt reward-led storytelling will experience a fundamental shift in their marketing performance. They will see higher quality engagement because the consumer is not merely an observer but a participant. They will see richer first-party data because reward-driven narratives capture intent, behaviour, and preference — not just impressions. And they will see stronger loyalty because consumers remember the role they played in the story.
                    </p>
                    <p>
                        The impact extends beyond campaign metrics. It builds cultural memory.
                    </p>
                    <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-l-4 border-[#da2929] hover:shadow-md transition-shadow">
                        <p className="text-gray-700 italic">
                            Britannia&rsquo;s nicknames, HP&rsquo;s student journeys, Tic Tac&rsquo;s small gestures of kindness — these became memorable not because they were loud, but because consumers shaped the story themselves.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900 group flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#da2929] rounded-full group-hover:h-10 transition-all duration-300"></span>
                        Why Reward-Led Storytelling Represents the Future of Engagement
                    </h2>
                    <p>
                        Consumer behaviour in India is moving toward participation-driven ecosystems. Gamified frameworks, interactive formats, predictive engagement, and personalised rewards are now part of the everyday digital vocabulary of younger audiences. These behaviours align perfectly with reward-led design.
                    </p>
                    <p>
                        Moreover, with AI personalisation maturing rapidly, rewards can now adapt to a user&rsquo;s behaviour, region, previous interaction, or even predicted interest. This means the narrative itself can evolve based on the individual — creating a dynamic, deeply personal engagement loop.
                    </p>

                    <div className="p-8 bg-[#0B2149] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-3 text-[#da2929]">Final Takeaway</h4>
                        <p className="text-gray-300">
                            In a digital landscape where brands are increasingly indistinguishable in content, pricing, and media strategy, reward-led storytelling becomes a differentiator that cannot be easily replicated. It is experiential, behavioural, and emotionally anchored — attributes that outperform static content in any attention economy.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
