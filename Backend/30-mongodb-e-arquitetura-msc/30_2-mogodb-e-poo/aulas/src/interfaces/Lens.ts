import { z } from 'zod';

const LensSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type Lens = z.infer<typeof LensSchema>;

export default Lens;
export { LensSchema };