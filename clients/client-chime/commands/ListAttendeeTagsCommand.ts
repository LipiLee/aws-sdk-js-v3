import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListAttendeeTagsRequest, ListAttendeeTagsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAttendeeTagsCommand,
  serializeAws_restJson1ListAttendeeTagsCommand,
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

export interface ListAttendeeTagsCommandInput extends ListAttendeeTagsRequest {}
export interface ListAttendeeTagsCommandOutput extends ListAttendeeTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p>
 */
export class ListAttendeeTagsCommand extends $Command<
  ListAttendeeTagsCommandInput,
  ListAttendeeTagsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttendeeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttendeeTagsCommandInput, ListAttendeeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAttendeeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttendeeTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttendeeTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttendeeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttendeeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttendeeTagsCommandOutput> {
    return deserializeAws_restJson1ListAttendeeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
