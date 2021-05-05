import { maxSatisfying } from "semver";

/**
 * Parse a registry manifest to get the best matching version
 * @param {Object} options - options
 * @param {string} options.manifest - the registry manifest
 * @param {string} options.version - the version (or version tag) to try to find
 * @returns {string} - The best matching version number
 */
export const getPackageVersionFromManifest = ({ manifest, version }) => {
  // Get the max satisfying semver version
  const packageVersion = maxSatisfying(manifest.versions, version);

  if (packageVersion) {
    return packageVersion;
  }

  // When no matching semver, try named tags, like "latest"
  if (manifest["dist-tags"][version]) {
    return manifest["dist-tags"][version];
  }

  // No match
  throw new Error("That version or tag does not exist.");
};
