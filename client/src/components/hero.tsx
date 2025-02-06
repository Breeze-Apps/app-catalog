import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Crafting Digital{' '}
            <span className="text-primary">Experiences</span>
          </h1>
          <p className="mb-12 text-lg text-muted-foreground md:text-xl">
            We build innovative mobile and web applications that transform ideas
            into reality. Our apps combine cutting-edge technology with intuitive
            design to deliver exceptional user experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" asChild>
              <a href="#apps">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}