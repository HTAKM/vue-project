<script setup>
const prop = defineProps({
    title: String
})
</script>
<template>
    <Transition appear>
        <div class="session">
                <h1>{{ prop.title }}</h1>
                <div class="inner-container">
                    <slot></slot>
                </div>
        </div>
    </Transition>
</template>
<style>
.session {
    margin: 0 0 5rem 0;
    flex-grow: 1;
    flex-wrap: wrap;

    h1 {
        color: var(--color-heading);
    }

    .inner-container {
        justify-content: center;
        border: 1px;
        .table {
            width: 100%;
            th, td {
                padding: 1px 5px;
            }
            thead th {
                text-align: center;
                font-weight: bold;
                background-color: var(--color-border-heading);
            }
            tbody {
                th {
                    text-align: left;
                }
                tr:hover {
                    th, td {
                        background-color: var(--color-border-hover);
                    }
                }
            }
        }
        .button-inline {
            display: inline-flex;
            margin: 0 auto;
            width: 100%;
            justify-content: center;

            button {
                border: 1px solid var(--color-border);
                border-radius: 1rem;
                padding: 1rem;
                margin: 0 1rem;
                color: var(--color-heading);
                font-size:x-large;
            }
        }
        .table-bordered td, .table-bordered th {
            border: 1px solid var(--color-border);
        }

        a {
            color: var(--color-link-text);
            display: inline-block;
            padding: 0;
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
.v-enter-to{
    opacity: 1;
    transform: translateY(0);
}
</style>