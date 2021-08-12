declare const FacebookAppEventsIntegration:
    | {disabled: true}
    | (() => Promise<void>)

export = FacebookAppEventsIntegration
