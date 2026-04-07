# Change Log

All notable changes to the "esacteksab-kai" extension will be documented in this file.

## [0.0.7]

### Added

- Project dev container configuration based on `esacteksab/dev-container`.
- CI workflow for theme validation and extension packaging.
- Theme JSON validation script and npm task.
- Refined GitHub release note category mapping to match this theme extension project.
- Added a fallback release-note category for miscellaneous labeled changes.
- Hardened extension packaging rules by adding an explicit `files` allowlist in `package.json`.
- Tightened ignore rules for local/dev-only assets during packaging.

### Changed

- Simplified workspace/tooling configuration.
- README with development and release instructions.
- Color values in the default and atlantis theme variants.
- Repository automation configuration (pre-commit and Dependabot).

### Removed

- Unused development dependencies.

## [0.0.6]

### Fixed

- Color regression where cyan rendered as orange.

### Changed

- Project documentation.
- Repository housekeeping and maintenance configuration.
- npm and Python development dependencies.

## [0.0.5]

### Changed

- Vivid theme colors made more vibrant.

## [0.0.4]

### Changed

- `gitDecoration.conflictingResourceForeground` changed from purple to orange.

## [0.0.3]

### Added

- Extension icon.

## [0.0.2]

### Fixed

- Debug toolbar background, foreground, and border colors.
- Terminal background to match the editor background.
