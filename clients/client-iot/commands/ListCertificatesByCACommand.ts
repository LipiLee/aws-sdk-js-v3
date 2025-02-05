import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCertificatesByCARequest, ListCertificatesByCAResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListCertificatesByCACommand,
  serializeAws_restJson1ListCertificatesByCACommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListCertificatesByCACommandInput extends ListCertificatesByCARequest {}
export interface ListCertificatesByCACommandOutput extends ListCertificatesByCAResponse, __MetadataBearer {}

/**
 * <p>List the device certificates signed by the specified CA certificate.</p>
 */
export class ListCertificatesByCACommand extends $Command<
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCertificatesByCACommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListCertificatesByCACommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCertificatesByCARequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCertificatesByCAResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCertificatesByCACommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCertificatesByCACommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCertificatesByCACommandOutput> {
    return deserializeAws_restJson1ListCertificatesByCACommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
