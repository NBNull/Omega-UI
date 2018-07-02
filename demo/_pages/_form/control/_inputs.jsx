/**
 *
 * @Demo: Inputs
 * @User: Longjun.Qu
 * @Date: 2018-07-01
 * @Time: 10:35
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Section,
    Demo,
    ButtonDropdown,
    Text,
    Code,
    Separator,
    Space,
    Paragraph,
    Form,
    FormGroup,
    Select,
    FormStatic,
    Textarea,
    FileInput,
    Input,
    Alert,
    Button
} from 'omega';

export default class Inputs extends Component {
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
                                header: '基础输入',
                                footer: (
                                    <Fragment>
                                        <Div _includeClass="m-form">
                                            <Div _includeClass="m-form__actions">
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Fragment>
                                )
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>以下是一些简单的文本输入组件，可以通过 <Code>input</Code>
                                                    组件实现如下效果。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                solid: false,
                                                value: ''
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                type: 'password',
                                                placeholder: 'Password',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例静态文字">
                                        <FormStatic>email@example.com</FormStatic>
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>

                            </Portlet>
                            <Portlet {...{
                                header: 'HTML5 文本输入',
                                footer: (
                                    <Fragment>
                                        <Div _includeClass="m-form">
                                            <Div _includeClass="m-form__actions">
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Fragment>
                                )
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>除了常见的文本输入，<Code>input</Code> 组件也支持 HTML5
                                                    中所有类型。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="Text">
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                value: 'This is omega ui',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="Search">
                                        <Input {...{
                                            input: {
                                                type: 'search',
                                                value: 'What\'s the weather?',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Email">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                value: 'omega_ui@163.com',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="URL">
                                        <Input {...{
                                            input: {
                                                type: 'url',
                                                value: 'https://omega.qulongjun.com',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>


                                    <FormGroup label="Tel">
                                        <Input {...{
                                            input: {
                                                type: 'tel',
                                                value: '1-(555)-555-555',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>


                                    <FormGroup label="Password">
                                        <Input {...{
                                            input: {
                                                type: 'password',
                                                value: '123456',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Number">
                                        <Input {...{
                                            input: {
                                                type: 'number',
                                                value: '22',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Date & Time">
                                        <Input {...{
                                            input: {
                                                type: 'datetime-local',
                                                value: '2018-07-01T13:45:00',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Date">
                                        <Input {...{
                                            input: {
                                                type: 'date',
                                                value: '2018-07-01',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Month">
                                        <Input {...{
                                            input: {
                                                type: 'month',
                                                value: '2018-07',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Week">
                                        <Input {...{
                                            input: {
                                                type: 'week',
                                                value: '2018-W33',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Time">
                                        <Input {...{
                                            input: {
                                                type: 'time',
                                                value: '13:45:00',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>

                                    <FormGroup label="Color">
                                        <Input {...{
                                            input: {
                                                type: 'color',
                                                value: '#563d7c',
                                            },
                                            display: [2]
                                        }} />
                                    </FormGroup>
                                </Form>
                            </Portlet>
                            <Portlet {...{
                                header: '阴影特效',
                                footer: (
                                    <Fragment>
                                        <Div _includeClass="m-form">
                                            <Div _includeClass="m-form__actions">
                                                <Button {...{
                                                    value: 'submit',
                                                    btnColor: 'primary',
                                                    _includeStyle: {
                                                        marginRight: '5px'
                                                    }
                                                }}/>
                                                <Button {...{
                                                    value: 'cancel',
                                                    btnColor: 'secondary'
                                                }}/>
                                            </Div>
                                        </Div>
                                    </Fragment>
                                )
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>可以通过设置 <Code>style</Code> 属性实现阴影效果。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                solid: false,
                                                value: '',
                                                style: 'air',
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                style: 'air',
                                                type: 'password',
                                                placeholder: 'Password',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                style: 'air',
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                style: 'air',
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    style: 'air',
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>
                            </Portlet>
                            <Portlet {...{
                                header: '椭圆样式'
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>可以通过设置 <Code>style</Code> 属性实现椭圆效果。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                solid: false,
                                                value: '',
                                                style: 'pill',
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                style: 'pill',
                                                type: 'password',
                                                placeholder: 'Password',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                style: 'pill',
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                style: 'pill',
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    style: 'pill',
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>
                            </Portlet>
                        </Div>
                        <Div _includeClass="col-xl-6">
                            <Portlet {...{
                                header: '直角样式'
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>可以通过设置 <Code>style</Code> 属性实现椭圆效果。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                solid: false,
                                                value: '',
                                                style: 'square',
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                style: 'square',
                                                type: 'password',
                                                placeholder: 'Password',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    style: 'square',
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>
                            </Portlet>
                            <Portlet {...{
                                header: '直角样式&反色'
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>可以通过设置 <Code>solid</Code>
                                                    属性实现反色效果（灰色背景色，透明边框）。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                solid: true,
                                                value: '',
                                                style: 'square',
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                style: 'square',
                                                solid: true,
                                                type: 'password',
                                                placeholder: 'Password',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                solid: true,
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                solid: true,
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    style: 'square',
                                                    solid: true,
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>
                            </Portlet>
                            <Portlet {...{
                                header: '禁用 & 只读'
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>将 <Code>disabled</Code> 属性设置为 <Code>true</Code>
                                                    将禁用该组件,将 <Code>readOnly</Code> 属性设置为
                                                    <Code>true</Code> 将以只读的方式显示该组件。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例文本框">
                                        <Input {...{
                                            input: {
                                                type: 'email',
                                                placeholder: 'Enter email',
                                                value: '',
                                                disabled: true,
                                                style: 'square',
                                            },
                                            helper: 'We\'ll never share your email with anyone else.\n'

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例密码框">
                                        <Input {...{
                                            input: {
                                                style: 'square',
                                                type: 'password',
                                                readOnly: true,
                                                placeholder: 'Password',
                                                value: '123456'
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="示例单选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                disabled: true,
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例多选框">
                                        <Select {...{
                                            select: {
                                                style: 'square',
                                                items: [1, 2, 3, 4, 5],
                                                multiple: true,
                                                disabled: true
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="示例富文本框">
                                            <Textarea {...{
                                                textarea: {
                                                    style: 'square',
                                                    readOnly: true,
                                                    value: 'This is a readOnly Text',
                                                    _includeAttribute: {
                                                        row: 3
                                                    }
                                                }
                                            }} />
                                    </FormGroup>
                                </Form>

                            </Portlet>
                            <Portlet {...{
                                header: '组件尺寸'
                            }} >
                                <Form {...{
                                    items: [(
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Large Text',
                                                solid: false,
                                                value: ''
                                            },
                                            size: 'lg',
                                            label: 'Large Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Default Text',
                                                solid: false,
                                                value: ''
                                            },
                                            label: 'Default Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Small Text',
                                                solid: false,
                                                value: ''
                                            },
                                            size: 'sm',
                                            label: 'Small Text',

                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            size: 'lg',
                                            label: 'Large Select'
                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            label: 'Default Select'
                                        }} />
                                    ), (
                                        <Input {...{
                                            type: 'select',
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            },
                                            size: 'sm',
                                            label: 'Small Select'
                                        }} />
                                    )]
                                }}>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>使用 <Code>size</Code> 属性可以设置组件的显示尺寸，支持的参数有
                                                    <Code>lg</Code> ， <Code>sm</Code> 或 <Code>normal</Code>
                                                    。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="Large Text">
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Large Text',
                                                value: '',
                                                size: 'lg'
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="Default Text">
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Default Text',
                                                value: ''
                                            }
                                        }} />
                                    </FormGroup>
                                    <FormGroup label="Small Text">
                                        <Input {...{
                                            input: {
                                                type: 'text',
                                                placeholder: 'Small Text',
                                                value: '',
                                                size: 'sm'
                                            },

                                        }} />
                                    </FormGroup>
                                    <FormGroup label="Large Select">
                                        <Select {...{
                                            select: {
                                                size: 'lg',
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="Default Select">
                                        <Select {...{
                                            select: {
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="Small Select">
                                        <Select {...{
                                            select: {
                                                size: 'sm',
                                                items: [1, 2, 3, 4, 5]
                                            }
                                        }}/>
                                    </FormGroup>
                                </Form>

                            </Portlet>
                            <Portlet {...{
                                header: '特殊组件'
                            }} >

                                <Form>
                                    <FormGroup>
                                        <Alert {...{
                                            message: (
                                                <Text>我们针对部分组件也进行了个性化的定制，例如文件选择组件
                                                    <Code>file</Code>。</Text>),
                                            _includeClass: 'm-alert--default'
                                        }}/>
                                    </FormGroup>
                                    <FormGroup label="上传文件">
                                        <FileInput {...{
                                            file: {
                                                placeholder: '选择文件'
                                            }
                                        }}/>
                                    </FormGroup>
                                </Form>
                            </Portlet>
                        </Div>
                    </Div>
                </Content>
            </Fragment>
        );
    }
}