declare const MixpanelIntegration:
    | {disabled: true}
    | (() => Promise<void>)

export = MixpanelIntegration
