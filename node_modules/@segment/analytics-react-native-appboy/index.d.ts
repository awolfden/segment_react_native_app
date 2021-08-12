declare const AppboyIntegration:
    | {disabled: true}
    | (() => Promise<void>)

export = AppboyIntegration
