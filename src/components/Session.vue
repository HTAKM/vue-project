<script setup>
const prop = defineProps({
    title: String,
    isDark: Boolean
})
</script>
<template>
    <Transition appear>
        <div class="session" :class="{dark : isDark}">
            <h1>{{ prop.title }}</h1>
            <div class="inner-container">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>
<style lang="scss">
@use '@/assets/css/default.scss' as *;
// * {
//     transition: 0.2s ease;
// }
.session {
    margin: 0 0 70px 0;
    flex-grow: 1;
    flex-wrap: wrap;
    h1 {
        color: var(--color-heading);
    }
    .inner-container {
        .table {
            thead th {
                background-color: var(--color-border-heading);
            }
            tbody tr:hover {
                th, td {
                    background-color: var(--color-border-hover);
                }
            }
        }
        .table-bordered {
            td, th {
                border-color: var(--color-border);
            }
        }
        .button-inline button {
            background-color: var(--color-border);
            border-color: var(--color-border);
            color: var(--color-heading);
        }
        a {
            color: var(--color-link-text);
        }
    }
    &.dark {
        h1 {
            color: var(--color-heading-dark);
        }
        .inner-container {
            .table {
                thead th {
                    background-color: var(--color-border-heading-dark);
                }
                tbody tr:hover {
                    th, td {
                        background-color: var(--color-border-hover-dark);
                    }
                }
            }
            .table-bordered {
                td, th {
                    border-color: var(--color-border-dark);
                }
            }
            .button-inline button {
                background-color: var(--color-border-dark);
                border-color: var(--color-border-dark);
                color: var(--color-heading-dark);
            }
            a {
                color: var(--color-link-text-dark);
            }
        }
    }
    &:not(.dark) {
        h1 {
            color: var(--color-heading-light);
        }
        .inner-container {
            .table {
                thead th {
                    background-color: var(--color-border-heading-light);
                }
                tbody tr:hover {
                    th, td {
                        background-color: var(--color-border-hover-light);
                    }
                }
            }
            .table-bordered {
                td, th {
                    border-color: var(--color-border-light);
                }
            }
            .button-inline button {
                background-color: var(--color-border-light);
                border-color: var(--color-border-light);
                color: var(--color-heading-light);
            }
            a {
                color: var(--color-link-text-light);
            }
        }
    }
    .inner-container {
        justify-content: center;
        .table {
            width: 100%;
            th, td {
                @include marpad(0, 0, 0, 0, 1px, 5px, 1px, 5px);
            }
            thead th {
                text-align: center;
                font-weight: bold;
            }
            tbody th {
                text-align: left;
            }
        }
        .table-bordered {
            th, td {
                border-style: solid;
                @extend %default-border;
            }
        }
        .button-inline {
            display: inline-flex;
            margin: 0 auto;
            width: 100%;
            justify-content: center;
            button {
                @extend %default-border;
                border-radius: 10px;
                font-size: 20px;
                @include marpad(0, 14px, 0, 14px, 14px, 14px, 14px, 14px);
            }
        }
        a {
            display: inline-block;
            padding: 0;
        }
        @media (max-width: 768px) {
            .button-inline button {
                font-size: 15px;
            }
        }
        @media (max-width: 576px) {
            .button-inline button {
                font-size: 10px;
            }
        }
    }
}
.v-enter-from {
    opacity: 0;
    transform: translateY(10px);
}
.v-enter-active {
    transition: opacity 0.5s ease-out, transform 1s ease;
    transition-delay: 0.1s;
}
.v-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>