/**
 *
 * @Demo: BootstrapTabs
 * @User: Longjun.Qu
 * @Date: 2018-06-18
 * @Time: 13:52
 *
 */


import React, {Component, Fragment} from 'react';

import Text from 'components/_element/Text';
import Div from 'components/_element/Div';
import Separator from "components/_element/Separator";
import SubHeader from 'components/_framework/SubHeader';
import Wrapper from 'components/_framework/Wrapper';
import Content from 'components/_framework/Content';
import Tab from "components/_base/Tab";
import Portlet from 'components/_portlet/Portlet';
import 'sass/_demo.scss';


class BootstrapTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const _props = this.props;
        const {} = _props;
        return (
            <Fragment>
                <Wrapper>
                    <SubHeader title="Bootstrap 选项卡"/>
                    <Content>
                        <Div _includeClass="row">
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '基础选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ]
                                    }}/>
                                </Portlet>
                                <Portlet {...{
                                    header: '带 Icon 的选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-exclamation-triangle'
                                                }
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown',
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-exclamation-circle',
                                                        _fontColor: 'success'
                                                    }
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'la la-cloud-download'
                                                }
                                            },
                                            {
                                                tab: 'Link 2',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'la la-puzzle-piece',
                                                    _fontColor: 'danger'
                                                }
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-comment'
                                                }
                                            }
                                        ]
                                    }}/>
                                    <Separator dashed={true}/>
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-time-2'
                                                }
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown',
                                                    icon: {
                                                        show: true,
                                                        name: 'flaticon-interface-5',
                                                        _fontColor: 'success'
                                                    }
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-placeholder-2'
                                                }
                                            },
                                            {
                                                tab: 'Link 2',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-lock',
                                                    _fontColor: 'danger'
                                                }
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled',
                                                icon: {
                                                    show: true,
                                                    name: 'flaticon-share'
                                                }
                                            }
                                        ]
                                    }}/>
                                    <Separator dashed={true}/>
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active',
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-cog'
                                                }
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown',
                                                    icon: {
                                                        show: true,
                                                        name: 'fa fa-file-powerpoint-o',
                                                        _fontColor: 'success'
                                                    }
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-user'
                                                }
                                            },
                                            {
                                                tab: 'Link 2',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-comment',
                                                    _fontColor: 'primary'
                                                }
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled',
                                                icon: {
                                                    show: true,
                                                    name: 'fa fa-lock'
                                                }
                                            }
                                        ]
                                    }}/>
                                </Portlet>
                                <Portlet {...{
                                    header: '自适应选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ],
                                        adjusted: true
                                    }}/>
                                </Portlet>
                            </Div>
                            <Div _includeClass="col-xl-6">
                                <Portlet {...{
                                    header: '高亮选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ],
                                        pill: {
                                            show: true
                                        }
                                    }}/>
                                </Portlet>
                                <Portlet {...{
                                    header: '带 Icon 的高亮选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-exclamation-triangle'
                                                }
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown',
                                                    icon: {
                                                        show: true,
                                                        name: 'la la-exclamation-circle'
                                                    }
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'la la-cloud-download'
                                                }
                                            },
                                            {
                                                tab: 'Link 2',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                icon: {
                                                    show: true,
                                                    name: 'la la-puzzle-piece'
                                                }
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled',
                                                icon: {
                                                    show: true,
                                                    name: 'la la-comment'
                                                }
                                            }
                                        ],
                                        pill: {
                                            show: true
                                        }
                                    }}/>
                                </Portlet>
                                <Portlet {...{
                                    header: '不同颜色的高亮选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ],
                                        pill: {
                                            show: true,
                                            color: 'success'
                                        }
                                    }}/>
                                    <Separator dashed={true}/>
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ],
                                        pill: {
                                            show: true,
                                            color: 'danger'
                                        }
                                    }}/>
                                </Portlet>
                                <Portlet {...{
                                    header: '自适应的高亮选项卡'
                                }} >
                                    <Tab {...{
                                        items: [
                                            {
                                                tab: 'Active',
                                                content: (
                                                    <Text>Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'active'
                                            },
                                            {
                                                groupTabs: [
                                                    {
                                                        tab: 'Action',
                                                        content: (
                                                            <Text>Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    },
                                                    {
                                                        tab: 'Another Action',
                                                        content: (
                                                            <Text>Anthoer Action Lorem Ipsum is simply dummy text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem Ipsum has been the industry's standard
                                                                dummy
                                                                text
                                                                ever since the 1500s, when an unknown printer took a
                                                                galley of
                                                                type
                                                                and scrambled it to make a type specimen book. It has
                                                                survived
                                                                not
                                                                only five centuries, but also the leap into electronic
                                                                typesetting,
                                                                remaining essentially unchanged. It was popularised in
                                                                the 1960s
                                                                with the release of Letraset sheets containing Lorem
                                                                Ipsum
                                                                passages,
                                                                and more recently with desktop publishing software like
                                                                Aldus
                                                                PageMaker including versions of Lorem Ipsum.</Text>),
                                                    }
                                                ],
                                                button: {
                                                    value: 'Dropdown'
                                                }
                                            },
                                            {
                                                tab: 'Link',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>)
                                            },
                                            {
                                                tab: 'Disabled',
                                                content: (
                                                    <Text>Link Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text
                                                        ever since the 1500s, when an unknown printer took a galley of
                                                        type
                                                        and scrambled it to make a type specimen book. It has survived
                                                        not
                                                        only five centuries, but also the leap into electronic
                                                        typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s
                                                        with the release of Letraset sheets containing Lorem Ipsum
                                                        passages,
                                                        and more recently with desktop publishing software like Aldus
                                                        PageMaker including versions of Lorem Ipsum.</Text>),
                                                state: 'disabled'
                                            }
                                        ],
                                        pill: {
                                            show: true,
                                            color: 'success'
                                        },
                                        adjusted: true
                                    }}/>
                                </Portlet>
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Fragment>
        );
    }
}

export default BootstrapTabs;