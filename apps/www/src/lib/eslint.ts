import { eslintVersions } from "@/generated/eslint-versions";
import { type ESLintConfigName, type Rules } from "@/types/eslint";

export const getESLintRules = async ({
  configName,
  version,
}: {
  configName: ESLintConfigName;
  version: string;
}): Promise<Rules | null> => {
  const validatedVersion =
    version === "latest"
      ? eslintVersions?.[0]?.version
      : eslintVersions.find((v) => v.version === version)?.version;

  if (!validatedVersion) {
    return null;
  }

  try {
    const { rules } = await import(
      `@/generated/rules/${validatedVersion}/${configName}.ts`
    );

    return rules || null;
  } catch {
    return null;
  }
};
