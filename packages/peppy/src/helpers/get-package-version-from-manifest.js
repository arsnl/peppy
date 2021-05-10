import { maxSatisfying } from "semver";

/**
 * Parse a registry manifest to get the best matching version
 * @param {Object} options - options
 * @param {string} options.manifest - the registry manifest
 * @param {string} options.packageVersion - the version (or version tag) to try to find
 * @returns {string} - The best matching version number
 */
export const getPackageVersionFromManifest = ({ manifest, packageVersion }) => {
  // Get the max satisfying semver version
  const version = maxSatisfying(manifest.versions, packageVersion);

  if (version) {
    return version;
  }

  // When no matching semver, try named tags, like "latest"
  if (manifest["dist-tags"][packageVersion]) {
    return manifest["dist-tags"][packageVersion];
  }

  // No match
  throw new Error("That version or tag does not exist.");
};
