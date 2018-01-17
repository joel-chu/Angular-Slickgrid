import { AutoResizeOption } from './autoResizeOption.interface';
import { BackendEventChanged } from './backendEventChanged.interface';
import { ColumnPicker } from './columnPicker.interface';
import { CheckboxSelector } from './checkboxSelector.interface';
import { GridMenu } from './gridMenu.interface';
import { HeaderButton } from './headerButton.interface';
import { HeaderMenu } from './headerMenu.interface';
import { Pagination } from './pagination.interface';
export interface GridOption {
    asyncEditorLoading?: boolean;
    autoEdit?: boolean;
    autoFitColumnsOnFirstLoad?: boolean;
    autoResize?: AutoResizeOption;
    autoTooltipOptions?: {
        enableForCells: boolean;
        enableForHeaderCells: boolean;
        maxToolTipLength: number;
    };
    cellHighlightCssClass?: string | null;
    checkboxSelector?: CheckboxSelector;
    columnPicker?: ColumnPicker;
    editable?: boolean;
    enableAsyncPostRender?: boolean;
    enableAutoResize?: boolean;
    enableAutoTooltip?: boolean;
    enableCellNavigation?: boolean;
    enableCheckboxSelector?: boolean;
    enableColumnPicker?: boolean;
    enableColumnReorder?: boolean;
    enableFiltering?: boolean;
    enableGridMenu?: boolean;
    enableHeaderButton?: boolean;
    enableHeaderMenu?: boolean;
    enableMouseHoverHighlightRow?: boolean;
    enablePagination?: boolean;
    enableRowSelection?: boolean;
    enableSorting?: boolean;
    enableTextSelectionOnCells?: boolean;
    enableTranslate?: boolean;
    explicitInitialization?: boolean;
    forceFitColumns?: boolean;
    gridContainerId?: string;
    gridMenu?: GridMenu;
    gridId?: string;
    headerRowHeight?: number;
    headerButton?: HeaderButton;
    headerMenu?: HeaderMenu;
    locale?: string;
    multiColumnSort?: boolean;
    onBackendEventApi?: BackendEventChanged;
    pagination?: Pagination;
    params?: any;
    registerPlugins?: any | any[];
    rowHeight?: number;
    rowSelectionOptions?: {
        selectActiveRow: boolean;
    };
    showHeaderRow?: boolean;
    showTopPanel?: boolean;
    topPanelHeight?: number;
}