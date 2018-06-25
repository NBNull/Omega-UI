/**
 *
 * @Demo: Spinners
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 22:17
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Text,
    Table,
    Button,
    Separator,
    Spinner,
    Loader
} from 'omega';

export default class Spinners extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <Content>
                    <Div _includeClass="row">
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '加载器'
                            }} >
                                <Table {...{
                                    data: [
                                        ["基础器加载", {
                                            value: (<Loader {...{
                                                _includeStyle: {
                                                    width: '30px',
                                                    display: 'inline-block'
                                                }
                                            }}/>)
                                        }],
                                        ["加载器状态", {
                                            value: (<Text>
                                                <Loader {...{
                                                    color: 'brand',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                                <Loader {...{
                                                    color: 'primary',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                                <Loader {...{
                                                    color: 'success',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                                <Loader {...{
                                                    color: 'info',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                                <Loader {...{
                                                    color: 'warning',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                                <Loader {...{
                                                    color: 'danger',
                                                    _includeStyle: {
                                                        width: '30px',
                                                        display: 'inline-block'
                                                    }
                                                }}/>
                                            </Text>)
                                        }],
                                        ["加载器尺寸", {
                                            value: (
                                                <Text>
                                                    <Loader {...{
                                                        color: 'brand',
                                                        size: 'sm',
                                                        _includeStyle: {
                                                            width: '30px',
                                                            display: 'inline-block'
                                                        }
                                                    }}/>
                                                    <Loader {...{
                                                        color: 'brand',
                                                        _includeStyle: {
                                                            width: '30px',
                                                            display: 'inline-block'
                                                        }
                                                    }}/>
                                                    <Loader {...{
                                                        color: 'brand',
                                                        size: 'lg',
                                                        _includeStyle: {
                                                            width: '30px',
                                                            display: 'inline-block'
                                                        }
                                                    }}/>
                                                </Text>
                                            )
                                        }
                                        ],
                                        ["输入框中使用", 'Comming soon'],
                                        ["按钮中使用", {
                                            value: (
                                                <Div>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'success',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'brand',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'left'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'danger',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Separator dashed={true}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-success',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-brand',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'left'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-danger',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right'
                                                        },
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Separator/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'success',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right',
                                                            size: 'sm'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'brand',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'left',
                                                            size: 'sm'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'danger',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right',
                                                            size: 'sm'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Separator/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-success',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right',
                                                            size: 'lg'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-brand',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'left',
                                                            size: 'lg'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                    <Button {...{
                                                        label: 'a',
                                                        btnColor: 'outline-danger',
                                                        value: 'Button',
                                                        loader: {
                                                            show: true,
                                                            align: 'right',
                                                            size: 'lg'
                                                        },
                                                        isCustom: true,
                                                        _includeStyle: {
                                                            marginRight: '5px'
                                                        }
                                                    }}/>
                                                </Div>
                                            )
                                        }],
                                    ],
                                    bordered: true
                                }}/>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '默认等待'
                            }} >
                                <Table {...{
                                    data: [
                                        ["基础等待", {
                                            value: (<Spinner/>)
                                        }],
                                        ["等待状态", {
                                            value: (<Div>
                                                <Spinner {...{
                                                    color: 'brand'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'primary'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'success'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'info'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'warning'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'danger'
                                                }}/>
                                            </Div>)
                                        }],
                                        ["小尺寸", {
                                            value: (<Div>
                                                <Spinner {...{
                                                    color: 'brand',
                                                    size: 'sm'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'primary',
                                                    size: 'sm'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'success',
                                                    size: 'sm'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'info',
                                                    size: 'sm'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'warning',
                                                    size: 'sm'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'danger',
                                                    size: 'sm'
                                                }}/>
                                            </Div>)
                                        }], ["大尺寸", {
                                            value: (<Div>
                                                <Spinner {...{
                                                    color: 'brand',
                                                    size: 'lg'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'primary',
                                                    size: 'lg'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'success',
                                                    size: 'lg'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'info',
                                                    size: 'lg'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'warning',
                                                    size: 'lg'
                                                }}/>
                                                <Spinner {...{
                                                    color: 'danger',
                                                    size: 'lg'
                                                }}/>
                                            </Div>)
                                        }]
                                    ],
                                    bordered: true
                                }}/>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}