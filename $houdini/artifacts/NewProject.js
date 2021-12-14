export default {
    name: "NewProject",
    kind: "HoudiniFragment",
    hash: "4cc08b595c931b33cf073a8cbad5e7534cde9620f502f8c7516d2f2a17e5ccd4",

    raw: `fragment NewProject on Project {
  projectName
}
`,

    rootType: "Project",

    selection: {
        projectName: {
            type: "String",
            keyRaw: "projectName"
        }
    }
};