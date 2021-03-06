import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom';

import NLayoutSet from '../layout/NLayoutSet';

import NConstraint from '../constraints/NConstraint';
import NControlUtils from '../utils/NControlUtils';

class FormExample extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div>
                <NLayoutSet layout={this.props.layout} first={this.props.form} />
            </div>
        );
    }
}

FormExample.propTypes = {
    form: PropTypes.object
};

FormExample.defaultProps = {
    layout: {
        type: "E"
    },
    form: {
        type: "formA",
        id: "theForm",
        title: "Form Title",
        formType: "editor", // 입력 또는 Search Form 또는 Readonly
        columns: 2,
        rows: 2,
        heaerTitles: ["기본정보", "일반정보"],
        fieldSet : [
            {
                title: "폼필드1",
                fieldList: [
                    { type: "text", id: "user_nm", label: "사용자명", placeholder: "사용자명을 입력해주세요."},
                    { type: "text", id: "position", label: "직위", placeholder: "직위를 입력해주세요."},
                    { type: "number", id: "number1", label: "숫자필드"},
                    { type: "textarea", id: "pass_wd", label: "패스워드", placeholder: "패스워드를 입력해주세요.", value: "패스워드"}
                ]
            },
            {
                title: "폼필드2",
                fieldList: [
                    { type: "addonicontextfield", id: "addon1", label: "아이콘텍스트", placeholder: "아이콘텍스트", value: "아이콘", readonly: true },
                    { type: "combo", id: "combo2", label: "콤보박스(서버사이드)", placeholder: "콤보박스", code_grp_id: "REQ_TYPE"},
                    { type: "date", id: "date1", label: "날짜" },
                    { type: "date", id: "date2", label: "날짜+시간", timePicker: true },
                    { type: "file", id: "atch_file", label: "첨부파일", placeholder: "첨부파일을 등록해주세요."}
                ]
            },
            {
                title: "폼필드3",
                fieldList: [
                    { type: "radio", id: "radio1", label: "라디오버튼(서버사이드)", code_grp_id: "REQ_TYPE"},
                    { type: "checkbox", id: "checkbox1", label: "체크박스(서버사이드)", code_grp_id: "REQ_TYPE" },
                    { type: "text", id: "pass_wd11", label: "패스워드", placeholder: "패스워드를 입력해주세요.", value: "패스워드"},
                    { type: "static", id: "pass_wd1", label: "패스워드 힌트(스태틱 Text)", value: "패스워드 힌트는 nkia", visible: false}
                ]
            },
            {
                title: "폼필드4",
                fieldList: [
                    {
                        type: "autocompletefield",
                        id: "search_user_nm",
                        label: "자동완성(AutoComplete)",
                        placeholder: "요청명을 입력해주세요.",
                        url: "/itg/base/searchCodeDataList.do",
                        data: {
                            code_grp_id: "REQ_TYPE"
                        },
                        parameterMapField: {
                            searchField: "search_code_text", filtersToJson: true
                        },
                        template: '<span class="order-id">[#= CODE_ID #]</span> #= CODE_TEXT #',
                        dataTextField: 'CODE_TEXT',
                        help: 'ex) 장애'
                    }, {
                        type: "multiselectbox",
                        id: "multi_user_nm",
                        label: "멀티선택(콤보)-정적item",
                        placeholder: "컬러를 선택해주세요",
                        items: [
                            { text: 'Black', value: '1' },
                            { text: 'Orange', value: '2' },
                            { text: 'Grey', value: '3' }
                        ],
                        dataTextField: "text",
                        dataValueField: "value",
                    }, {
                        type: "multiselectbox",
                        id: "multi_req_type",
                        label: "멀티선택(콤보) - 공통코드(다중선택)",
                        placeholder: "요청유형을 선택해주세요.",
                        url: "/itg/base/searchCodeDataList.do",
                        data: {
                           code_grp_id: "REQ_TYPE"
                       },
                       dataTextField: "CODE_TEXT",
                       dataValueField: "CODE_ID",
                       multiple: true
                    }, {
                        type: "multiselectbox",
                        id: "multi_user_ids",
                        label: "멀티선택(콤보) - 검색(하나만 선택)",
                        placeholder: "사용자명을 입력해주세요.",
                        url: "/itg/system/user/searchUserList.do",
                        dataTextField: "USER_NM",
                        dataValueField: "USER_ID",
                        serverFiltering: true,
                        serverPaging: true,
                        minLength: 2,
                        maxSelectedItems: 1,
                        itemTemplate: '<span class="order-id">#= USER_ID # -</span> #= USER_NM #',
                        help: '2자 이상 입력, ex) te'
                    }, {
                        type: "multiselectbox",
                        id: "multi_user_ids2",
                        label: "멀티선택(콤보) - 검색(멀티)",
                        placeholder: "사용자명을 입력해주세요.",
                        url: "/itg/system/user/searchUserList.do",
                        dataTextField: "USER_NM",
                        dataValueField: "USER_ID",
                        serverFiltering: true,
                        serverPaging: true,
                        minLength: 1,
                        multiple: true,
                        itemTemplate: '<span class="order-id">[#= USER_ID #] -</span> #= USER_NM #',
                        help: '1자 이상 입력, ex) 김'
                    }
                ]
            }
        ]
    }
};

export default FormExample;
