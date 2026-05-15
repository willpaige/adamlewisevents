import * as migration_20260515_add_video_fields from './20260515_add_video_fields';

export const migrations = [
  {
    up: migration_20260515_add_video_fields.up,
    down: migration_20260515_add_video_fields.down,
    name: '20260515_add_video_fields'
  },
];
