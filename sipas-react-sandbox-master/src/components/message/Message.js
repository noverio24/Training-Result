import React from 'react'
import { Result } from 'antd'

const Error403 = ({ title, subtitle, extra, children }) =>
    <Result
        status="403"
        title={title || 403}
        subTitle={subtitle}
        extra={extra}
    >{children}</Result>

const Error404 = ({ title, subtitle, extra, children }) =>
    <Result
        status="404"
        title={title || 404}
        subTitle={subtitle}
        extra={extra}
    >{children}</Result>

const Error500 = ({ title, subtitle, extra, children }) =>
    <Result
        status="500"
        title={title || 500}
        subTitle={subtitle}
        extra={extra}
    >{children}</Result>

const Info = ({ title, subtitle, extra, children }) =>
    <Result
        status="info"
        title={ title || "Info" }
        subTitle={ subtitle }
        extra={ extra }
    >{children}</Result>

const Failure = ({ title, subtitle, extra, children }) =>
    <Result
        status="error"
        title={title || "Error"}
        subTitle={subtitle}
        extra={extra}
    >{children}</Result>

const Success = ({ title, subtitle, extra, children }) =>
    <Result
        status="success"
        title={ title || "Success" }
        subTitle={ subtitle }
        extra={ extra }
    >{children}</Result>

const Warning = ({ title, subtitle, extra, children }) =>
    <Result
        status="warning"
        title={title || "Perhatian"}
        subTitle={subtitle}
        extra={extra}
        >{children}</Result>

export {
    Error403,
    Error404,
    Error500,
    Info, 
    Success, 
    Warning, 
    Failure
}