export interface SaveCredentialsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
