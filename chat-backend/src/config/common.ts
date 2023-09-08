import { ConfigService } from "@nestjs/config";

type ExtractConfigurationFromConfigServiceArgs<T> = {
  template: T;
  validate?: Array<keyof T>;
};

export const extractConfigurationFromConfigService =
  <R>({ template, validate }: ExtractConfigurationFromConfigServiceArgs<R>) =>
  (config: ConfigService): R => {
    const missing_values: string[] = [];
    const keys = Object.keys(template);
    const res: Record<string, string> = {};
    for (const k of keys) {
      const value = config.get(template[k]);
      if (validate.includes(k as keyof R) && !value)
        missing_values.push(template[k]);
      res[k] = value;
    }
    if (missing_values.length > 0) {
      throw new Error(
        `Configuration error, missing value for ${missing_values}`,
      );
      process.exit(1);
    }
    return res as unknown as R;
  };
