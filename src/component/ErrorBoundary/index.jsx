import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // state를 갱신하여 다음 렌더링에서 대체 UI를 표시합니다.
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            // 별도로 작성한 대체 UI를 렌더링할 수도 있습니다.
            return (
                <>
                    <h1>나...는,,, 메뉴를,,, 못골라,,,,,,,,.</h1>
                    <div>이부분은 외부에서 주입받게 커스텀할 수 있습니당</div>
                </>
            );
        }

        return this.props.children;
    }
}
