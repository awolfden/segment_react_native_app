declare const AmplitudeIntegration:
    | {disabled: true}
    | (() => Promise<void>)

export = AmplitudeIntegration
