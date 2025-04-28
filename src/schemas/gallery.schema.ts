import * as z from 'zod';

export const RoomSchema = z.object({
  image: z.string(),
});
export type Room = z.infer<typeof RoomSchema>;

export const MetadataSchema = z.object({
  last_updated: z.coerce.date(),
});
export type Metadata = z.infer<typeof MetadataSchema>;

export const GalleryDataSchema = z.object({
  bathrooms: z.array(RoomSchema),
  kitchens: z.array(RoomSchema),
  fireplaces: z.array(RoomSchema),
});
export type GalleryDataType = z.infer<typeof GalleryDataSchema>;

export const GallerySchema = z.object({
  success: z.boolean(),
  data: GalleryDataSchema,
  metadata: MetadataSchema,
});
export type GalleryType = z.infer<typeof GallerySchema>;
